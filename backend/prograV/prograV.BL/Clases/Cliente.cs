using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class Cliente : ICliente
    {
        private DS.Cliente clienteObj;
        public Cliente()
        {
            clienteObj = new DS.Cliente();
        }
        public void ActualizarCliente(Datos.Cliente cliente, string clave)
        {
            clienteObj.ActualizarCliente(cliente,clave);
        }

        public Datos.Cliente BuscarClienteporID(int id)
        {
            return clienteObj.BuscarClienteporID(id);
        }

        public Datos.Cliente BuscarClienteporNombre(string nombreCliente)
        {
            return  clienteObj.BuscarClienteporNombre(nombreCliente);
        }

        public void EliminarCliente(Datos.Cliente cliente)
        {
            clienteObj.EliminarCliente(cliente);
        }

        public void InsertarCliente(Datos.Cliente cliente)
        {
            cliente.InsertarCliente(cliente);
        }

        public List<Datos.Cliente> ListaCliente()
        {
            return clienteObj.ListaCliente();
        }
    }
}
