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
            _db.Update<Datos.Hoteles>(new {
                CostoBase = hotel.CostoBase,
                CostoNoche = hotel.CostoNoche,
                Descripcion = hotel.Descripcion,
                Estrellas = hotel.Estrellas,
                idPais = hotel.idPais,
                NombreHotel = hotel.NombreHotel,
                tipoHabitacion = hotel.tipoHabitacion
            }, p => p.idHotel == int.Parse(clave));

        }

        public Hoteles BuscarHotelporId(int Id)
        {
            return _db.Select<Datos.Hoteles>(x => x.idHotel == Id).FirstOrDefault();

        }

        public Hoteles BuscarHotelporNombre(string nombreHotel)
        {
            return _db.Select<Datos.Hoteles>(x => x.NombreHotel == nombreHotel).FirstOrDefault();

        }

        public void EliminarHotel(Hoteles hotel)
        {
            _db.Delete(hotel);
        }

        public void InsertarHotel(Hoteles hotel)
        {
            _db.InsertOnly(() => new Datos.Hoteles {
                CostoBase = hotel.CostoBase,
                CostoNoche= hotel.CostoNoche,
                Descripcion= hotel.Descripcion,
                Estrellas= hotel.Estrellas,
                idPais = hotel.idPais,
                NombreHotel = hotel.NombreHotel,
                tipoHabitacion = hotel.tipoHabitacion
            });

        }

        public List<Hoteles> ListaHotel()
        {
            return _db.Select<Datos.Hoteles>();
        }
    }
}
