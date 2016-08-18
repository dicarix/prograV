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
        public void InsertarTipoHabitacion(tipoHabitacion tipoHabitacion)
        {
            _db.Insert(tipoHabitacion);
        }
    }
}
