using System.Reflection.Metadata.Ecma335;

namespace API.DTOs
{
    public class LoginDto
    {
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
