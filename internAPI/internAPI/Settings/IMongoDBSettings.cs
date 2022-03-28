using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace internAPI.Settings
{
    public interface IMongoDBSettings
    {
      public  string InternCollectionName { get; set; }
     public   string ConnectionString { get; set; }
      public  string DatabaseName { get; set; }

    }
}
