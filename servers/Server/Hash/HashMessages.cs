using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Hash
{
    public class HashMessages
    {
        public string HashEncryptObject<T>(T obj, byte[] key, byte[] iv, byte[] tag)
        {
            string json = JsonSerializer.Serialize(obj);
            byte[] jsonBytes = Encoding.UTF8.GetBytes(json);
            byte[] encryptedBytes = new byte[jsonBytes.Length];

            using (var aes = new AesGcm(key))
            {
                aes.Encrypt(iv, jsonBytes, encryptedBytes, tag);
            }

            return Convert.ToBase64String(encryptedBytes);
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
