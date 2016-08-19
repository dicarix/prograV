using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.DS
{
    public interface IPais
    {
        void InsertarPais(Datos.Pais pais);
        Datos.Pais BuscarPaisporNombre(string nombrePais);
        List<Datos.Pais> ListaPais();
        void EliminarPais(Datos.Pais pais);
        void ActualizarPais(Datos.Pais pais, string clave);
        Datos.Pais BuscarPaisporID(int idPais);
    }
}
