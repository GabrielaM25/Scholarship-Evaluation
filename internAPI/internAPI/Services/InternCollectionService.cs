using internAPI.Models;
using internAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internAPI.Services
{
    public class InternCollectionService: IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _interns;

        public InternCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _interns = database.GetCollection<Intern>(settings.InternCollectionName);
        }
        public InternCollectionService()
        {
        }

        /* public Task<List<Intern>> GetNotesByOwnerId(Guid ownerId)
         {
             throw new NotImplementedException();
         }
 */
        public async Task<List<Intern>> GetAll()
        {
            var result = await _interns.FindAsync(intern => true);
            return result.ToList();
        }

        public async Task<Intern> Get(Guid id)
        {
            return (await _interns.FindAsync(intern => intern.Id == id)).FirstOrDefault();
        }

        public async Task<bool> Create(Intern intern)
        {
            if (intern.Id == Guid.Empty)
            {
                intern.Id = Guid.NewGuid();
            }

            await _interns.InsertOneAsync(intern);
            return true;
        }

        public async Task<bool> Update(Guid id, Intern internNew)
        {
            internNew.Id = id;
            var result = await _interns.ReplaceOneAsync(note => note.Id == id, internNew);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _interns.InsertOneAsync(internNew);
                return false;
            }

            return true;
        }

         public async Task<bool> Delete(Guid id)
        {
            var result = await _interns.DeleteOneAsync(intern => intern.Id == id);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        Task<List<Intern>> IInternCollectionService.GetNotesByOwnerId(Guid ownerId)
        {
            throw new NotImplementedException();
        }

      

       

        

        

       
    }
}
