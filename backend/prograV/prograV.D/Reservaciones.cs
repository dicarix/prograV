using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Reservacion
    {
        public int CantidadPersonas { get; set; }
        public float MontoTotal { get; set; }
    }
    public class ReservacionHotel:Reservacion
    {
        public int idHotel { get; set; }
    }
    public class ReservacionVuelo : Reservacion
    {
        public int idVuelo { get; set; }
    }
}
