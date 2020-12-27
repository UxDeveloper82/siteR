using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using sideR.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace sideR.Data
{
    public class StoreContextSeed
    {
            public static async Task SeedAsync(DataContext context, ILoggerFactory loggerFactory)
            {
                try
                {
                    if (!context.Ports.Any())
                    {
                        var portsData = System.IO.File.ReadAllText("Data/PortsSeedData.json");

                        var ports = JsonConvert.DeserializeObject<List<Port>>(portsData);

                        foreach (var item in ports)
                        {
                            context.Ports.Add(item);
                        }

                        await context.SaveChangesAsync();
                    }

                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                    logger.LogError(ex.Message);
                }
            }
        }
}
