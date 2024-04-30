/*
Calcular el monto total de un destino de viaje en el Perú por asiento y cantidad. Mostrarlo en consola
 */

class viaje{
    constructor(nombreDestino, cantidadporAsiento, precioAsiento, horaSalida, horaLlegada){
        this.nombreDestino = nombreDestino
        this.precioAsiento = parseFloat(precioAsiento)
        this.horaLlegada = horaLlegada
        this.cantidadporAsiento = parseFloat(cantidadporAsiento)
        this.horaSalida = horaSalida
    }
    CalcularPrecio() {
        let resultado = this.cantidadporAsiento * this.precioAsiento
        console.log("El precio a pagar es: "+ resultado)
    }
    NombreViaje(){
        console.log("Viaje solicitado [" + this.nombreDestino+ "]")
    }
}

const Destino1= new viaje("Lima", 2, 20, "14:20", "16:40")
const Destino2= new viaje("Cusco", 1, 50, "04:30", "12:30")
const Destino3= new viaje("Trujillo", 4, 60, "15:20", "19:20")
const Destino4= new viaje("Arequipa", 3, 25, "20:00", "22:50")

function MostrarInfo(){
    do{
        let nombreViaje = prompt("Ingrese su destino a viajar: [A]-Lima, [B]-Cusco, [C]-Trujillo, [D]-Arequipa").toUpperCase()
        switch(nombreViaje){
            case 'A': 
                Destino1.NombreViaje()
                for(const rec in Destino1){
                    console.log(Destino1[rec])
                }
                Destino1.CalcularPrecio()
                break;
            case 'B': 
                Destino2.NombreViaje()
                for(const rec in Destino2){
                    console.log(Destino2[rec])
                }
                Destino2.CalcularPrecio()
                break;
            case 'C': 
                Destino3.NombreViaje()
                for(const rec in Destino3){
                    console.log(Destino3[rec])
                }
                Destino3.CalcularPrecio()
                break;
            case 'D': 
                Destino4.NombreViaje()
                for(const rec in Destino4){
                    console.log(Destino4[rec])
                }
                Destino4.CalcularPrecio()
                break;
        }
    }
    while(nombreViaje != "A" || "B" || "C" || "D")
}
MostrarInfo()
