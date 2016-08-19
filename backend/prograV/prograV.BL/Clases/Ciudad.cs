using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class Ciudad : ICiudad
    {
        private DS.Ciudad ciudadObj;
        public Ciudad()
        {
            ciudadObj = new DS.Ciudad();
        }
        public void ActualizarCiudad(Datos.Ciudad ciudad, string clave)
        {
            ciudadObj.ActualizarCiudad(ciudad, clave);
        }

        public Datos.Ciudad BuscarCiudadporNombre(string nombreCiudad)
        {
            return ciudadObj.BuscarCiudadporNombre(nombreCiudad);
        }

        public void EliminarCiudad(Datos.Ciudad ciudad)
        {
            ciudadObj.EliminarCiudad(ciudad);
        }

        public void InsertarCiudad(Datos.Ciudad ciudad)
        {
            ciudadObj.InsertarCiudad(ciudad);
        }

        public List<Datos.Ciudad> ListaCiudad()
        {
            return ciudadObj.ListaCiudad();
        }
        public Datos.Ciudad BuscarCiudadporId(int idCiudad)
        {
            return ciudadObj.BuscarCiudadporId(idCiudad);
        }
    }
}
