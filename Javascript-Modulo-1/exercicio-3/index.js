let valor = parseFloat(prompt("Insira uma medida em metros: "));

let escolha = prompt(
  "Para qual unidade de medida deseja converter?\n1)milímetro (mm)\n2)centímetro (cm)\n3)decímetro (dm)\n4)decâmetro (dam)\n5)hectômetro (hm)\n6)quilômetro (km)"
);

switch (escolha) {
  case "1":
    alert(`O valor de ${valor} metros em milímetro é : ${valor * 1000} milímetros`);
    break;
  case "2":
    alert(`O valor de ${valor} metros em centímetro é : ${valor * 100} centímetro`);
    break;
  case "3":
    alert(`O valor de ${valor} metros em decímetro é : ${valor * 10} decímetro`);
    break;
  case "4":
    alert(`O valor de ${valor} metros em decâmetro é : ${valor / 10} decâmetro`);
    break;
  case "5":
    alert(`O valor de ${valor} metros em hectômetro é : ${valor / 100} hectômetro`);
    break;
  case "6":
    alert(`O valor de ${valor} metros em quilômetro é : ${valor / 1000} quilômetro`);
    break;
  default:
    alert("Escolha invalida.");
}
