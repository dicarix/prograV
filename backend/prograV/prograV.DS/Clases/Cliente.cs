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
    public class Cliente : ICliente
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;
        public Cliente()
        {
            _conexion = new OrmLiteConnectionFactory(DB.Default.dbConnection, SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void ActualizarCliente(Datos.Cliente cliente, string clave)
        {
            _db.Update<Datos.Cliente>(new { 
                Nombre = cliente.Nombre
                Apellidos = cliente.Apellidos
                Email = cliente.Email
                Telefono = cliente.Telefono
                Contrasena = cliente.Contrasena
                }, p => p.idCliente == int.Parse(clave));

        }

        public Datos.Cliente BuscarClienteporID(int id)
        {
            return _db.Select<Datos.Cliente>(x => x.idCliente == id).FirstOrDefault();

        }

        public Datos.Cliente BuscarClienteporNombre(string nombreCliente)
        {
            return _db.Select<Datos.Cliente>(x => x.Nombre == nombreCliente).FirstOrDefault();

        }

        public void EliminarCliente(Datos.Cliente cliente)
        {
            _db.Delete(cliente);

        }

        public void InsertarCliente(Datos.Cliente cliente)
        {
            _db.InsertOnly(() => new Datos.Cliente { 
                Nombre = cliente.Nombre
                Apellidos = cliente.Apellidos
                Email = cliente.Email
                Telefono = cliente.Telefono
                Contrasena = cliente.Contrasena});

        }

        public List<Datos.Cliente> ListaCliente()
        {
            return _db.Select<Datos.Cliente>();

        }
    }
}
