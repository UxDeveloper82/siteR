using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using sideR.Data;
using sideR.Models;

namespace Backend.Data
{
    public class Seed
    {
        public static void SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager, DataContext context)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                var portsData = System.IO.File.ReadAllText("Data/PortsSeedData.json");

                var ports = JsonConvert.DeserializeObject<List<Port>>(portsData);

                foreach (var item in ports)
                {
                    context.Ports.Add(item);
                }

                context.SaveChanges();

                var roles = new List<Role>
                {
                   new Role{Name = "Member"},
                   new Role{Name = "Admin"},
                   new Role{Name = "Moderator"},
                   new Role{Name = "VIP"},
                };
                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    userManager.CreateAsync(user, "Pa$$w0rd").Wait();
                    userManager.AddToRoleAsync(user, "Member").Wait();
                }


                // create admin user
                var adminUser = new User
                {
                    UserName = "Admin"
                };

                var result = userManager.CreateAsync(adminUser, "Pa$$w0rd82").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").Result;
                    userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).Wait();
                }
            }
        }
    }
}