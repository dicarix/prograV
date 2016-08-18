using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Paquete
    {
        public Cliente Cliente { get; set; }
        public bool Estado { get; set; }
        public float Monto { get; set; }
        public DateTime FechaCreacion{ get; set; }
    }
    public class DetallePaquete
    {
        public Paquete Paquete { get; set; }
        public ReservacionVuelo VueloSalida { get; set; }
        public ReservacionVuelo VueloIda{ get; set; }
        public ReservacionHotel ReservacionHotel { get; set; }
    }
}
