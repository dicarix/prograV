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

        public void ActualizarHotel(Hoteles hotel, string clave)
        {
            throw new NotImplementedException();
        }

        public Hoteles BuscarHotelporNombre(string nombreHotel)
        {
            throw new NotImplementedException();
        }

        public void EliminarHotel(Hoteles Hotel)
        {
            throw new NotImplementedException();
        }

        public void InsertarHotel(Hoteles hotel)
        {
            _db.Insert(hotel);
        }

        public List<Hoteles> ListaHotel()
        {
            throw new NotImplementedException();
        }
    }
}
