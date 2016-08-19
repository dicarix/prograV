using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Paquete
    {
        public int idCliente { get; set; }
        public bool Estado { get; set; }
        public float Monto { get; set; }
        public DateTime FechaCreacion{ get; set; }
    }
    public class DetallePaquete
    {
        public int idPaquete { get; set; }
        public int VueloSalida { get; set; }
        public int VueloIda{ get; set; }
        public int ReservacionHotel { get; set; }
    }
}
