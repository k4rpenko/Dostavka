namespace Hash.Interface
{
    public interface IArgon2Hasher
    {
        public string Encrypt(string password, string Key);
        public string GenerateKey();
    }
}
