
function calculator(x, y, calculate){

    console.log(calculate(x,y))

    return calculate 
}

let subtraction = function(x,y){

    return x - y 
}

let addition = function(x,y){
    return x+y 
}

let multiplication = function(x,y){

    return x*y
}

calculator(8, 13, subtraction)

calculator(8, 13, addition)

calculator(8, 13 , multiplication)