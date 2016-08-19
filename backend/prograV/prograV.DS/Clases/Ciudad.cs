using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;
using System.Data;
using ServiceStack.OrmLite;

namespace prograV.DS
{
    public class Ciudad : ICiudad
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public Ciudad()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }
        public void ActualizarCiudad(Datos.Ciudad ciudad, string clave)
        {
            _db.Update<Datos.Ciudad>(new { NombreCiudad = ciudad.NombreCiudad, idPais = ciudad.idPais }, p => p.idCiudad == int.Parse(clave));
            
        }

        public Datos.Ciudad BuscarCiudadporNombre(string nombreCiudad)
        {
            return _db.Select<Datos.Ciudad>(x => x.NombreCiudad == nombreCiudad).FirstOrDefault();
        }

        public Datos.Ciudad BuscarCiudadporId(int idCiudad)
        {
            return _db.Select<Datos.Ciudad>(x => x.idCiudad== idCiudad).FirstOrDefault();
        }

        public void EliminarCiudad(Datos.Ciudad ciudad)
        {
            _db.Delete(ciudad);
        }

        public void InsertarCiudad(Datos.Ciudad ciudad)
        {
            _db.Insert(ciudad);
        }

        public List<Datos.Ciudad> ListaCiudad()
        {
            return _db.Select<Datos.Ciudad>();
        }
    }
}
