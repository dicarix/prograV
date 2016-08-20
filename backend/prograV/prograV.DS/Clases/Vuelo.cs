using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.DS
{
    public class Vuelo : IVuelos
    {
        void IVuelos.ActualizarVuelos(Datos.Vuelo vuelo, string clave)
        {
            throw new NotImplementedException();
        }

        Datos.Vuelo IVuelos.BuscarVueloPorId(int id)
        {
            throw new NotImplementedException();
        }

        Datos.Vuelo IVuelos.BuscarVueloPorNombre(string nombre)
        {
            throw new NotImplementedException();
        }

        void IVuelos.EliminarVuelos(Datos.Vuelo Vuelos)
        {
            throw new NotImplementedException();
        }

        void IVuelos.InsertarVuelo(Datos.Vuelo vuelo)
        {
            throw new NotImplementedException();
        }

        List<Datos.Vuelo> IVuelos.ListaVuelos()
        {
            throw new NotImplementedException();
        }
    }
}
