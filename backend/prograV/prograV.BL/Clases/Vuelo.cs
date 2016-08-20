using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class Vuelo : IVuelos
    {
        private DS.IVuelos vueloObj;
        public Vuelo()
        {
            vueloObj = new DS.Vuelo();
        }

        public void ActualizarVuelos(Datos.Vuelo vuelo, string clave)
        {
            vueloObj.ActualizarVuelos(vuelo, clave);
        }

        public Datos.Vuelo BuscarVueloPorId(int id)
        {
            return vueloObj.BuscarVueloPorId(id);
        }

        public Datos.Vuelo BuscarVueloPorNombre(string nombre)
        {
            return vueloObj.BuscarVueloPorNombre(nombre);
        }

        public void EliminarVuelos(Datos.Vuelo Vuelos)
        {
            vueloObj.EliminarVuelos(Vuelos);
        }

        public void InsertarVuelo(Datos.Vuelo vuelo)
        {
            vueloObj.InsertarVuelo(vuelo);
        }

        public List<Datos.Vuelo> ListaVuelos()
        {
            return vueloObj.ListaVuelos();
        }
    }
}
