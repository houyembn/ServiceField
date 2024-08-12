using ServiceField.Server.Models;

namespace ServiceField.Server
{
    public interface IJwtAuthService
    {
        User Authentificate(string email, string password);
    }
}
