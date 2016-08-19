using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using prograV.Datos;

namespace prograV.BL
{
    public class Pais : IPais
    {
        private DS.Pais paisObject;
        public Pais()
        {
            paisObject = new DS.Pais();
        }

        public void ActualizarPais(Datos.Pais pais, string clave)
        {
            paisObject.ActualizarPais(pais, clave);
        }

        public Datos.Pais BuscarPaisporNombre(string nombrePais)
        {
            return paisObject.BuscarPaisporNombre(nombrePais);

        }

        public void EliminarPais(Datos.Pais pais)
        {
            paisObject.EliminarPais(pais);
        }

        public void InsertarPais(Datos.Pais pais)
        {
            paisObject.InsertarPais(pais);
        }
        public List<Datos.Pais> ListaPais()
        {
            return paisObject.ListaPais();
        }
    }
}
