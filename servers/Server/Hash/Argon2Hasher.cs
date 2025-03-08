using System.Security.Cryptography;
using System.Text;
using Hash.Interface;
using Konscious.Security.Cryptography;

namespace Hash
{
    public class Argon2Hasher : IArgon2Hasher
    {
        public string Encrypt(string password, string key)
        {
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            byte[] salt = Encoding.UTF8.GetBytes(key);

            using (var argon2 = new Argon2i(passwordBytes))
            {
                argon2.Salt = salt;
                argon2.DegreeOfParallelism = 8;
                argon2.MemorySize = 65536;
                argon2.Iterations = 4;

                byte[] hash = argon2.GetBytes(32);
                return Convert.ToBase64String(hash);
            }
        }

        public string GenerateKey()
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            return Convert.ToBase64String(salt);
        }

        public string GenerateHash(string password)
        {
            return Encrypt(password, GenerateKey());
        }

        public bool VerifyHash(string hashedPassword, string password)
        {
            string newHash = Encrypt(password, GenerateKey());
            return hashedPassword == newHash;
        }

        public string Hash(string password)
        {
            return GenerateHash(password);
        }

        public bool Verify(string hashedPassword, string password)
        {
            return VerifyHash(hashedPassword, password);
        }
    }
}