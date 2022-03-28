using internAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internAPI.Services
{
    public interface IInternCollectionService: ICollectionService<Intern>
    {
        public Task<List<Intern>> GetNotesByOwnerId(Guid ownerId);

    }
}
