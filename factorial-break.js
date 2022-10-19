
function factorialize (num) {

    let resultado = 1
    let i = 1
    
    while (i <= num){
        resultado = resultado * i
        i++
        if (num > 10){
            console.log("ingrese un número menor a 10!")
            break
        }
    }
    
    console.log(resultado);
}

factorialize (10)