using PGAdminDAL;

namespace Hash.Interface
{
    public interface IJwt
    {
        public string GenerateJwtToken(string userId, string Key, int Hours, string userRoleId = null);
        public string GetUserIdFromToken(string token);
        public bool ValidateToken(string token, AppDbContext context);

    }
}
