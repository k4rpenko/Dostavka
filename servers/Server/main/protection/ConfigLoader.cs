namespace main.protection
{
    public class ConfigLoader
    {
        public static (byte[] Key, byte[] IV, byte[] Tag) LoadEncryptionConfig()
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            byte[] key = Convert.FromBase64String(config["Hash:key"]);
            byte[] iv = Convert.FromBase64String(config["Hash:iv"]);
            byte[] tag = Convert.FromBase64String(config["Hash:tag"]);

            return (key, iv, tag);
        }
    }
}
