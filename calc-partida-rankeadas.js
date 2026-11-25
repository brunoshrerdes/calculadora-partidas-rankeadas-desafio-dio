import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let opcao = await rl.question("Deseja calcular o Rank do seu Heroi?\n1 - Sim\n2 - Não\nDigite o numero da opção desejada: ");

while (opcao === "1") {

    let vitoria = await rl.question("Digite o numero de vitórias: ");
    let derrota = await rl.question("Digite o numero de derrotas: ");
    let saldoVitorias = vitoria - derrota;
    let nivelHeroi;
    calcularRank(nivelHeroi);

  async function calcularRank(nivelHeroi) {

    switch (true) {
  case saldoVitorias <= 10:
    nivelHeroi = "Ferro";
    break;
  case saldoVitorias >= 11 && saldoVitorias <= 20:
    nivelHeroi = "Bronze";
    break;
  case saldoVitorias >= 21 && saldoVitorias <= 50:
    nivelHeroi = "Prata";
    break;
  case saldoVitorias >= 51 && saldoVitorias <= 80:
    nivelHeroi = "Ouro";
    break;
  case saldoVitorias >= 81 && saldoVitorias <= 90:
    nivelHeroi = "Diamante";
    break;
  case saldoVitorias >= 91 && saldoVitorias <= 100:
    nivelHeroi = "Lendário";
    break;
  default:
    nivelHeroi = "Imortal";
    break;
    }
    console.log("O Herói tem o saldo de vitórias de " + saldoVitorias + " e está no nível de " + nivelHeroi);
    } 
  opcao = await rl.question("Deseja calcular o Rank do seu Heroi novamente?\n1 - Sim\n2 - Não\nDigite o numero da opção desejada: ");
}
    console.log("Obrigado por utilizar o sistema de cálculo de Rank do seu Heroi!");

rl.close();