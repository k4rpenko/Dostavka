using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace MongoDB
{
    public class AppMongoContext
    {
        private readonly IConfiguration configuration;
        private readonly IMongoDatabase _database;

        public AppMongoContext(IConfiguration _configuration)
        {
            configuration = _configuration;
            var connectionString = MongoUrl.Create(configuration.GetSection("MongoDB:ConnectionString").Value);
            var client = new MongoClient(connectionString);
            var databaseName = configuration.GetSection("MongoDB:MongoDbDatabase").Value;
            _database = client.GetDatabase(databaseName);
        }

        public IMongoDatabase? Database => _database;
    }
}
