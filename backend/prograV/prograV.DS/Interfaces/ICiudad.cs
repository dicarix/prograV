using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.DS
{
    interface ICiudad
    {
        void InsertarCiudad(Datos.Ciudad Ciudad);
        Datos.Ciudad BuscarCiudadporNombre(string nombreCiudad);
        List<Datos.Ciudad> ListaCiudad();
        void EliminarCiudad(Datos.Ciudad Ciudad);
        void ActualizarCiudad(Datos.Ciudad Ciudad, string clave);
        Datos.Ciudad BuscarCiudadporId(int idCiudad);
    }
}
