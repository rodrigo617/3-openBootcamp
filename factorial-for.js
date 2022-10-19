
function factorialize (num) {

    var resultado = 1

    for (let i = 1; i <= num; i++ ){
        resultado = resultado * i
    }
    console.log(resultado);
}

factorialize (10)