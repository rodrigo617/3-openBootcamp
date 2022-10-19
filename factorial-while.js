
function factorialize (num) {

    let resultado = 1
    let i = 1

    while (i <= num){
        resultado = resultado * i
        i++
    }
    
    console.log(resultado);
}

factorialize (10)