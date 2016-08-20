using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;
using ServiceStack.OrmLite;
using System.Data;

namespace prograV.DS
{
    public class Vuelo : IVuelos
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public Vuelo()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }
        void IVuelos.ActualizarVuelos(Datos.Vuelo vuelo, string clave)
        {
            _db.Update<Datos.Vuelo>(new {
                CiudadOrigen = vuelo.CiudadOrigen,
                CiudadDestino = vuelo.CiudadDestino,
                FechaSalida = vuelo.FechaSalida,
                FechaLlegada = vuelo.FechaLlegada,
                Capacidad = vuelo.Capacidad,
                Aerolinea = vuelo.Aerolinea,
                Clase = vuelo.Clase,
                PrecioBase = vuelo.PrecioBase,
                Escala = vuelo.Escala,
                CantidadEscalas = vuelo.CantidadEscalas
            }, p => p.idVuelo == int.Parse(clave));

        }

        Datos.Vuelo IVuelos.BuscarVueloPorId(int id)
        {
            return _db.Select<Datos.Vuelo>(x => x.idVuelo == id).FirstOrDefault();

        }

        Datos.Vuelo IVuelos.BuscarVueloPorNombre(string nombre)
        {
            return _db.Select<Datos.Vuelo>(x => x.Aerolinea == nombre).FirstOrDefault();
        }

        void IVuelos.EliminarVuelos(Datos.Vuelo Vuelos)
        {
            _db.Delete(Vuelos);
        }

        void IVuelos.InsertarVuelo(Datos.Vuelo vuelo)
        {
            _db.InsertOnly(() => new Datos.Vuelo
            {
                CiudadOrigen = vuelo.CiudadOrigen,
                CiudadDestino = vuelo.CiudadDestino,
                FechaSalida = vuelo.FechaSalida,
                FechaLlegada = vuelo.FechaLlegada,
                Capacidad = vuelo.Capacidad,
                Aerolinea = vuelo.Aerolinea,
                Clase = vuelo.Clase,
                PrecioBase = vuelo.PrecioBase,
                Escala = vuelo.Escala,
                CantidadEscalas = vuelo.CantidadEscalas
            });

        }

        List<Datos.Vuelo> IVuelos.ListaVuelos()
        {
            return _db.Select<Datos.Vuelo>();
        }
    }
}
