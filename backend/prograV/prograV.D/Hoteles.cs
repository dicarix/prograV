using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Hoteles
    {
        public string Descripcion { get; set; }
        public float CostoNoche { get; set; }
        public tipoHabitacion tipoHabitacion{ get; set; }
        public int Estrellas { get; set; }
        public float CostoBase { get; set; }
        public Pais Pais { get; set; }
    }
    public class tipoHabitacion
    {
        public string Descripcion { get; set; }
    }
}
