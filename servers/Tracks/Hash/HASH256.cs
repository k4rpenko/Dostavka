using System.Text;
using System.Security.Cryptography;
using Hash.Interface;

namespace Hash
{
    public class HASH256 : IHASH256
    {
        public byte[] GenerateKey()
        {
            byte[] key = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(key);
            }
            return key;
        }


        public string Encrypt(string message, string key)
        {
            byte[] keyBytes = Encoding.UTF8.GetBytes(key);
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);

            using (var hmac = new HMACSHA256(keyBytes))
            {
                byte[] hashBytes = hmac.ComputeHash(messageBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        public string HashSha256(string message)
        {
            using (var sha256 = SHA256.Create())
            {
                byte[] messageBytes = Encoding.UTF8.GetBytes(message);

                byte[] hashBytes = sha256.ComputeHash(messageBytes);

                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }
    }
}
