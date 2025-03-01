using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace Hash
{
    public class HashMessages
    {
        public (string encryptedData, byte[] tag) HashEncryptObject<T>(T obj, byte[] key, byte[] iv)
        {
            string json = JsonSerializer.Serialize(obj);
            byte[] jsonBytes = Encoding.UTF8.GetBytes(json);
            byte[] encryptedBytes = new byte[jsonBytes.Length];
            byte[] tag = new byte[16];

            using (var aes = new AesGcm(key))
            {
                aes.Encrypt(iv, jsonBytes, encryptedBytes, tag);
            }

            string encryptedData = Convert.ToBase64String(encryptedBytes);
            return (encryptedData, tag);
        }

        public T HashDecryptObject<T>(string encryptedBase64, byte[] key, byte[] iv, byte[] tag)
        {
            byte[] encryptedBytes = Convert.FromBase64String(encryptedBase64);
            byte[] jsonBytes = new byte[encryptedBytes.Length];

            using (var aes = new AesGcm(key))
            {
                aes.Decrypt(iv, encryptedBytes, tag, jsonBytes);
            }

            string json = Encoding.UTF8.GetString(jsonBytes);
            return JsonSerializer.Deserialize<T>(json);
        }
    }
}