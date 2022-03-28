using internAPI.Models;
using internAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class InternsController : ControllerBase
    {
        IInternCollectionService _internCollectionService;
        public InternsController(IInternCollectionService internCollectionService) {
            _internCollectionService = internCollectionService ?? throw new ArgumentNullException(nameof(internCollectionService));

        }


        [HttpGet]

        public async Task<IActionResult> GetInterns()
        {
            List<Intern> notes = await _internCollectionService.GetAll();
            return Ok(notes);
        }

        [HttpPost]
        public async Task<IActionResult> CreateIntern([FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("Note should not be null");
            }
            await _internCollectionService.Create(intern);
            return Ok(await _internCollectionService.GetAll());
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateIntern(Guid id, [FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("Note can't be null");
            }
            if (!await _internCollectionService.Update(id, intern))
            {
                return NotFound("This note doesn't exist");
            }
            return Ok(await _internCollectionService.Get(id));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInern(Guid id)
        {
            if (await _internCollectionService.Delete(id))
            {
                return Ok(await _internCollectionService.GetAll());
            }
            else
            {

                return NotFound("this note doesn't exist");
            }
        }
    }

}

