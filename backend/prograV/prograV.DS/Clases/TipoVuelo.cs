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
    public class TipoVuelo : ITipoVuelo
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public TipoVuelo()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }
        public void ActualizartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo, string clave)
        {
            _db.Update<Datos.tipoClaseVuelo>(new {Descripcion = tipoClaseVuelo.Descripcion}, p => p.idTipoClaseVuelo == int.Parse(clave));
        }

        public tipoClaseVuelo BuscartipoClaseVueloporID(int id)
        {
            return _db.Select<Datos.tipoClaseVuelo>(x => x.idTipoClaseVuelo == id).FirstOrDefault();
        }

        public tipoClaseVuelo BuscartipoClaseVueloporNombre(string nombretipoClaseVuelo)
        {
            return _db.Select<Datos.tipoClaseVuelo>(x => x.Descripcion == nombretipoClaseVuelo).FirstOrDefault();
        }

        public void EliminartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo)
        {
            _db.Delete(tipoClaseVuelo);

        }

        public void InsertartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo)
        {
            _db.InsertOnly(() => new Datos.tipoClaseVuelo{Descripcion = tipoClaseVuelo.Descripcion});
        }

        public List<tipoClaseVuelo> ListatipoClaseVuelo()
        {
            return _db.Select<Datos.tipoClaseVuelo>();
        }
    }
}
