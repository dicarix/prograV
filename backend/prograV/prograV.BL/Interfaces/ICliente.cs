using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.BL
{
    public interface ICliente
    {
        void InsertarCliente(Datos.Cliente cliente);
        Datos.Cliente BuscarClienteporNombre(string nombreCliente);
        List<Datos.Cliente> ListaCliente();
        void EliminarCliente(Datos.Cliente Cliente);
        void ActualizarCliente(Datos.Cliente cliente, string clave);
    }
}
