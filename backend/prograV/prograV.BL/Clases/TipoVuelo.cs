using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class TipoVuelo : ITipoVuelo
    {
        private DS.TipoVuelo tipoVueloObj;
        public TipoVuelo()
        {
            tipoVueloObj = new DS.TipoVuelo();
        }
        public void ActualizartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo, string clave)
        {
            tipoVueloObj.ActualizartipoClaseVuelo(tipoClaseVuelo, clave);
        }

        public tipoClaseVuelo BuscartipoClaseVueloporID(int id)
        {
            return tipoVueloObj.BuscartipoClaseVueloporID(id);
        }

        public tipoClaseVuelo BuscartipoClaseVueloporNombre(string nombretipoClaseVuelo)
        {
            return tipoVueloObj.BuscartipoClaseVueloporNombre(nombretipoClaseVuelo);
        }

        public void EliminartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo)
        {
            tipoVueloObj.EliminartipoClaseVuelo(tipoClaseVuelo);
        }

        public void InsertartipoClaseVuelo(tipoClaseVuelo tipoClaseVuelo)
        {
            tipoVueloObj.InsertartipoClaseVuelo(tipoClaseVuelo);
        }

        public List<tipoClaseVuelo> ListatipoClaseVuelo()
        {
            return tipoVueloObj.ListatipoClaseVuelo();
        }
    }
}
