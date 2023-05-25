//Crear variables para los valores de la matriz
let x11 = document.querySelector('#x1')
let y12 = document.querySelector('#y1')
let t1 = document.querySelector('#t1')
let x21 = document.querySelector('#x2')
let y22 = document.querySelector('#y2')
let t2 = document.querySelector('#t2')
let determinante

//Crear variable para el boton 'Calcular'
let btn = document.querySelector('#btn')
let limpiador = document.querySelector('#limpiar')
let resultado = document.querySelector('#resultado')
let resultado2 = document.querySelector('#resultado2')


function mostrar() {
    x11.value = ""
    y12.value = ""
    t1.value = ""
    x21.value = ""
    y22.value = ""
    t2.value = ""
    resultado.textContent = ""
    resultado2.textContent = ""

}
//Funcioón para visualizar el botón de limpiar que está oculto 
function ver_boton_limpiar(){
    document.getElementById('aparecer').style.display='block';

}

//Crear la funcion para obtener el determinante de una matriz 2x2 
function determinante2x2(x1, y1, x2, y2) {
    //Variable para los valores que se suman hacia la derecha
    let derecha = x1 * y2
    //Variable para los valores que se restaran a los valores anteriores
    let izquierda = y1 * x2
    //Retornar la resta de ambas variables
    determinante = (derecha - izquierda)
    return determinante;
}

function cramer2x2() {
    //En el caso de que no se ingrese ningun valor
    if (isNaN(x11.value) || isNaN(y12.value) || isNaN(t1.value) || isNaN(x21.value) || isNaN(y22.value) || isNaN(t2.value)) {
        resultado.textContent = 'Ingrese un valor numerico en cada casillero'
    } else {
        //Obtener el determinante de la matriz 'A'
        let detA = determinante2x2(Number(x11.value), Number(y12.value), Number(x21.value), Number(y22.value))
        //Obtener el determinante de la matriz 'A' en la columna de las x
        let detX = determinante2x2(Number(t1.value), Number(t2.value), Number(y12.value), Number(y22.value))
        //Obtener el determinante de la matriz 'A' en la columna de las y
        let detY = determinante2x2(Number(x11.value), Number(x21.value), Number(t1.value), Number(t2.value))
        //Obtener el valor de x
        let valorX = detX / detA
        //Obtener el valor de y
        let valorY = detY / detA
        //Mostrar ambos valores
        resultado.textContent = 'El valor de x es: ' + valorX + ', y el valor de y es: ' + valorY
        resultado2.textContent = 'La determinante de la matriz es:' + determinante
    }
}

//Invocar funcion cramer
btn.onclick = function() {
    cramer2x2()
    ver_boton_limpiar()
}

limpiador.onclick = function() {
    mostrar()
}
// 1 -3, 1 5 => 8 ----- Deter
// 1 -3 2, 1 5 10 => x = 5, y = 1 ----- cramer
