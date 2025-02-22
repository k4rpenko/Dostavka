namespace Hash.Interface
{
    public interface IHASH256
    {
        byte[] GenerateKey();
        string Encrypt(string message, string key);
        string HashSha256(string message);
    }
}
