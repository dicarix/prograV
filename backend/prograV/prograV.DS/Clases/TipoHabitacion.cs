using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack.OrmLite;
using System.Data;
using prograV.Datos;

namespace prograV.DS
{
    public class TipoHabitacion : ITipoHabitacion
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public TipoHabitacion()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void ActualizarTipoHabitacion(tipoHabitacion habitacion, string clave)
        {
            _db.Update<Datos.tipoHabitacion>(new { Descripcion = habitacion.Descripcion}, p => p.Descripcion == clave);
        }

        public tipoHabitacion BuscarTipoHabitacionporNombre(string nombreTipoHabitacion)
        {
            return _db.Select<Datos.tipoHabitacion>(x => x.Descripcion == nombreTipoHabitacion).FirstOrDefault();
        }

        public void EliminarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            _db.Delete(tipoHabitacion);
        }

        public void InsertarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            _db.InsertOnly(() => new Datos.tipoHabitacion { Descripcion = tipoHabitacion.Descripcion });
        }

        public List<tipoHabitacion> ListaTipoHabitacion()
        {
            return _db.Select<Datos.tipoHabitacion>();
        }
    }
}
