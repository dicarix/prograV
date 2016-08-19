using ServiceStack.OrmLite;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.DS
{
    public class Hotel:IHotel
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public Hotel()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void InsertarHotel(Hoteles hotel)
        {
            _db.Insert(hotel);
        }
    }
}
