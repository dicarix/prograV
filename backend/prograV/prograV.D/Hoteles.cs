using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Hoteles
    {
        public int idHotel { get; set; }
        public string NombreHotel { get; set; }
        public string Descripcion { get; set; }
        public float CostoNoche { get; set; }
        public int tipoHabitacion { get; set; }
        public int Estrellas { get; set; }
        public float CostoBase { get; set; }
        public int idPais { get; set; }
    }
    public class tipoHabitacion
    {
        public int idTipoHabitacion { get; set; }
        public string Descripcion { get; set; }
    }
}
