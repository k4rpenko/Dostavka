namespace Hash.Interface
{
    public interface IHASH256
    {
        byte[] GenerateKey();
        string Encrypt(string message, string key);
        public byte[] HexStringToByteArray(string hex);
        string HashSha256(string message);
    }
}
