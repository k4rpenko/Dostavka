namespace Hash.Interface
{
    public interface IArgon2Hasher
    {
        string GenerateHash(string password);
        bool VerifyHash(string hashedPassword, string password);
        string Hash(string password);
        bool Verify(string hashedPassword, string password);
    }
}