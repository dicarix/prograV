using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Pais
    {
        public int idPais { get; set; }
        public string NombrePais { get; set; }
    }
    public class Ciudad
    {
        public string NombreCiudad { get; set; }
        public int idPais { get; set; }
        public int idCiudad{ get; set; }
    }
}