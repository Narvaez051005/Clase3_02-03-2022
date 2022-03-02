let Resultado = document.getElementById('ResEj1')
const Valor_matricula = 900000
let Nombre, Creditos, Total_final, Descuento
function LeerDatos() {
    Creditos = Number(prompt("Ingrese la cantidad de creditos"))

}
LeerDatos()
console.log(calculadora(Creditos))
function calculadora(Creditos) {
    if (Creditos <= 6){
        Descuento = Valor_matricula *0.50
    }
    else if(Creditos > 6 && Creditos <= 10 ) {
        Descuento = Valor_matricula *0.25
    }
    else if(creditos > 10){
            Descuento = 0
    } 
    else{
            alert("opcion no valida")
    }
    Total_final = Valor_matricula-Descuento
    return Total_final

}
console.log(Total_final)
alert(Total_final)