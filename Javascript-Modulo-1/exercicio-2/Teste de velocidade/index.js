let nome1 = prompt("Qual a marca do carro 1? ")
let nome2 = prompt("Qual a marca do carro 2? ")
let velocidade1 = prompt("Qual a velocidade do carro 1 ")
let velocidade2 = prompt("Qual a velocidade do carro 2 ")

let velo1 = parseFloat(velocidade1)
let velo2 = parseFloat(velocidade2)

if(velo1 > velo2){
    alert(`O ${nome1} é mais rapido que o ${nome2}.`)
}else if (velo1 === velo2){
    alert("Os dois carros tem a mesma velocidade.")
}else{
    alert(`O ${nome2} é mais rapido que o ${nome1}.`)
}