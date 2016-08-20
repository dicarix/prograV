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
    public class Pais : IPais
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public Pais()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void ActualizarPais(Datos.Pais pais,string clave)
        {
            _db.Update<Datos.Pais>(new { NombrePais = pais.NombrePais }, p => p.NombrePais ==clave);
       
        }

        public Datos.Pais BuscarPaisporNombre(string nombrePais)
        {
            return _db.Select<Datos.Pais>(x => x.NombrePais == nombrePais).FirstOrDefault();
        }

        public Datos.Pais BuscarPaisporID(int idPais)
        {
            return _db.Select<Datos.Pais>(x => x.idPais == idPais).FirstOrDefault();

        }

        public void EliminarPais(Datos.Pais pais)
        {
            _db.Delete(pais);
        }

        public void InsertarPais(Datos.Pais pais)
        {
            _db.InsertOnly(() => new Datos.Pais { NombrePais = pais.NombrePais});
        }

        public List<Datos.Pais> ListaPais()
        {
            return _db.Select<Datos.Pais>();
        }
    }
}
