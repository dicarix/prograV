using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prograV.Datos
{
    public class Vuelo
    {
        public int idVuelo { get; set; }
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
        public int idTipoClaseVuelo { get; set; }
        public string Descripcion { get; set; }
    }
    public class vueloDetalle
    {
        public int idVuelo { get; set; }
        public string Aerolinea { get; set; }
        public string Ciudad { get; set; }
        public string FechaLlegada { get; set; }
        public string FechaSalida { get; set; }
    }
}
