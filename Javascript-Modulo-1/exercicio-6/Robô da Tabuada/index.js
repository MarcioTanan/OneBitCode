let n = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let contador = ""

for(let i = 1; i <= 20; i++){
    contador += "->" + n + "x" + i + "=" + (n * i) + "\n";
}

alert("Resultado da Tabuada de " + n + ":\n\n" + contador)