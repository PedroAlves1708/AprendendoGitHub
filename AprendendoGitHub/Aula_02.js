console.log(typeof 13);
console.log(typeof "texto");
console.log(typeof false);
console.log(typeof null);
console.log(2*4-3);
console.log(1/0);
console.log(0/0);
console.log(5 < 3 ? "tomatinho" : "cenourinha");
console.log("5"+ 1);

let i = 0;
do {
    i++;
    if(i == 5){
        continue; // continue pula para o proximo
    }
    if (i == 8){
        break;  // break para tudo
    }
    console.log("i = " + i);
}
while(true)

function escreverNoConsole() {
    console.log("Escrevendo no console");
}

escreverNoConsole();

const textoNoConsole = function() {
    console.log("Texto no console!");
}

textoNoConsole();

const textPorParametro = function(texto) {
    console.log(texto);
}

textPorParametro("Testando por parametro");



function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    }else {
        console.log("Não pode dirigir");
    }
}
const idade = 19;
const cnh = true;
podeDirigir(idade,cnh);