using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sideR.Models
{
    public class PortPhoto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }

        public string PublicId { get; set; }

        public Port Port { get; set; }

        public int PortId { get; set; }
    }
}
