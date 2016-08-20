using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.BL
{
    public interface IVuelos
    {
        void InsertarVuelo(Datos.Vuelo vuelo);
        List<Datos.Vuelo> ListaVuelos();
        void EliminarVuelos(Datos.Vuelo Vuelos);
        void ActualizarVuelos(Datos.Vuelo vuelo, string clave);
        Datos.Vuelo BuscarVueloPorNombre(string nombre);
        Datos.Vuelo BuscarVueloPorId(int id);
    }
}
