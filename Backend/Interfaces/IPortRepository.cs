using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Entities;
using sideR.Models;

namespace Backend.Interfaces
{
    public interface IPortRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Port>> GetPorts();
        Task<Port> GetPort(int id);

    }
}