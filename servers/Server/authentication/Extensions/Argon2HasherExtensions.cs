using Hash.Interface;

namespace Authentication.Extensions
{
    public static class Argon2HasherExtensions
    {
        public static string Hash(this IArgon2Hasher hasher, string password)
        {
            return hasher.GenerateHash(password);
        }

        public static bool Verify(this IArgon2Hasher hasher, string hashedPassword, string password)
        {
            return hasher.VerifyHash(hashedPassword, password);
        }
    }
}
