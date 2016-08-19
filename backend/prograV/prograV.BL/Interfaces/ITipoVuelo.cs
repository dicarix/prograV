using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.BL
{
    public interface ITipoVuelo
    {
        void InsertartipoClaseVuelo(Datos.tipoClaseVuelo tipoClaseVuelo);
        Datos.tipoClaseVuelo BuscartipoClaseVueloporNombre(string nombretipoClaseVuelo);
        List<Datos.tipoClaseVuelo> ListatipoClaseVuelo();
        void EliminartipoClaseVuelo(Datos.tipoClaseVuelo tipoClaseVuelo);
        void ActualizartipoClaseVuelo(Datos.tipoClaseVuelo tipoClaseVuelo, string clave);
    }
}
