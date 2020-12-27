using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sideR.Dtos
{
    public class PortForDetailedDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public string Language { get; set; }

        public string Link { get; set; }

        public string GitLink { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<PortPhotosForDetailedDto> PortPhotos { get; set; }
    }
}
