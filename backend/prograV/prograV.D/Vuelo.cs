using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Vuelo
    {
        public int CiudadOrigen { get; set; }
        public int CiudadDestino { get; set; }
        public DateTime FechaSalida { get; set; }
        public DateTime FechaLlegada { get; set; }
        public int Capacidad { get; set; }
        public string Aerolinea { get; set; }
        public int Clase { get; set; }
        public float PrecioBase { get; set; }
        public bool Escala { get; set; }
        public int CantidadEscalas { get; set; }
    }
    public class tipoClaseVuelo
    {
        public string Descripcion { get; set; }
    }
}
