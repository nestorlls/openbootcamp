// creamos un funcion que haga la suma de dos números
function suma (num1 , num2 ) {
    return num1 +  num2;
}
// creamos una función que haga la multiplicaion de dos números
function multiplicar ( num1, num2 ) {
    return num1 * num2;
}

// creamos un funcion que haga la suma y la multiplicade dos numero pero llamando a las funciones creadas arriba

function suma_multiplicar ( num1, num2 ) {
    return suma ( num1, num2) * multiplicar ( num1, num2);
}

// creamos una funcion para factorial 


function factorial ( num ) {
    if (num ===1) return 1;
    return num * factorial( num - 1);
}