using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Reservacion
    {
        public int Capacidad { get; set; }
        public float MontoTotal { get; set; }
    }
    public class ReservacionHotel:Reservacion
    {
        public Hoteles Hotel { get; set; }
    }
    public class ReservacionVuelo : Reservacion
    {
        public Vuelo Vuelo { get; set; }
    }
}
