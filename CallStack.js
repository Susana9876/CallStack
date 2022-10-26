//En primer lugar cuando se comienza a ejecutar el programa la pila estará vacía.
function calculateFactorial(x) { // Esta es la segunda función en apilarse ya que x ya tiene un valor que es 9.
    var r = 1;
    if (Number.isInteger(x)) { //Esto es lo que se apila enseguida (3er paso) ya que se hará una condición con el valor de x.
        for (var i = 1; i <= x; i++) { //Enseguida este ciclo se apila (4to paso) ya que se hará uns instrucción con la variable que se mandó.
            r *= i; 
        }
    }
    return r;
}
//Cuando se ejecute todo lo de la función anterior, se va a desapilar desde el for hasta el calculateFactorial, pero se queda solamente la función printFactorial 
//porque aún no se termina todo el código.

function printFactorial(n) {
    var f = calculateFactorial(n);
    console.log(f); //Por último se apila esta instrucción porque queremos ver qué es lo que se manda en f.
}

//Después se vuelve a desapilar y al final también se desapila la función printFactorial y se quedará completamente sola la pila.
printFactorial(9); //Esta función es la primera en apilarse.