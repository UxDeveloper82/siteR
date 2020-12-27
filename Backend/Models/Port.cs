using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sideR.Models
{
    public class Port
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public string Language { get; set; }

        public string Link { get; set; }

        public string GitLink { get; set; }

        public ICollection<PortPhoto> PortPhotos { get; set; }
    }
}
