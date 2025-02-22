using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Hash.Interface;

namespace Hash
{
    public class JWT : IJwt
    {
        private readonly byte[] Key;

        public JWT() {}

        public string GenerateJwtToken(string userId, string Key, int Hours, string userRoleId = null)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var expiration = DateTime.Now.AddHours(Hours);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            if (!string.IsNullOrEmpty(userRoleId)) { claims.Add(new Claim("Role", userRoleId)); }

            var token = new JwtSecurityToken(
                claims: claims,
                expires: expiration,
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token).ToString();
        }

        public string GetUserIdFromToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            var userIdClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Sub);

            return userIdClaim?.Value;
        }

        /*
        public bool ValidateToken(string token, AppDbContext context)
        {
            var handler = new JwtSecurityTokenHandler();
            try
            {
                var jwtToken = handler.ReadJwtToken(token);
                var userIdClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Sub);
                if (userIdClaim != null)
                {
                    var user = context.User.FirstOrDefault(u => u.Id == userIdClaim.Value);
                    if (user != null)
                    {
                        var key = Encoding.UTF8.GetBytes(user.ConcurrencyStamp);
                        var validationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = false,
                            ValidateAudience = false,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(key),
                            ClockSkew = TimeSpan.Zero
                        };


                        var principal = handler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);

                        return validatedToken.ValidTo > DateTime.UtcNow;
                    }
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }*/
    }
}
