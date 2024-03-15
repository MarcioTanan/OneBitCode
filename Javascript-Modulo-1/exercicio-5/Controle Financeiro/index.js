let qtd = parseFloat(prompt("Qual a quantidade de dinheiro?"))

let menu = ""

do {
 menu = prompt(
    "Saldo disponível: R$ " + qtd +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"    
  )

  switch (menu) {
    case "1":
        qtd += parseFloat(prompt("Informe o valor a ser adicionado:"))
        break
      case "2":
        qtd -= prompt("Informe o valor a ser removido:")
        break
      case "3":
        alert("Saindo...")
        break
      default:
        alert("Entrada inválida.")
        break
  }
} while (menu !== "3")