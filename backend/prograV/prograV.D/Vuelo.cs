using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Vuelo
    {
        public Ciudad CiudadOrigen { get; set; }
        public Ciudad CiudadDestino { get; set; }
        public DateTime FechaSalida { get; set; }
        public DateTime FechaLlegada { get; set; }
        public int Capacidad { get; set; }
        public string Aerolinea { get; set; }
        public tipoClaseVuelo Clase { get; set; }
        public float PrecioBase { get; set; }
        public Boolean Escala { get; set; }
        public int CantidadEscalas { get; set; }
    }
    public class tipoClaseVuelo
    {
        public string Descripcion { get; set; }
    }
}
