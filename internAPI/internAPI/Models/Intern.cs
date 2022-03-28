using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internAPI.Models
{
    public class Intern
    {
         public string FirstName { get; set; }

        public string SecondName { get; set; }
        public int Age { get; set; }
        public string DepartamentId { get; set; }
        public string BirthDate { get; set; }
        public string Gender { get; set; }
        public string Faculty { get; set; }
        public Guid Id { get; set; }

       

    }
}
