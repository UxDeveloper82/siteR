using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Entities;
using Backend.Interfaces;
using Microsoft.EntityFrameworkCore;
using sideR.Data;
using sideR.Models;

namespace Backend.Data
{
    public class PortRepository : IPortRepository
    {
        private readonly DataContext _context;
        public PortRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Port> GetPort(int id)
        {
            var port = await _context.Ports
                .Include(p => p.PortPhotos)
                .FirstOrDefaultAsync(p => p.Id == id);
            return port;
        }

        public async Task<IEnumerable<Port>> GetPorts()
        {
            var ports = await _context.Ports.Include(p => p.PortPhotos).ToListAsync();
            return ports;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}