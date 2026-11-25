import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let vitoria = await rl.question("Digite o numero de vitórias: ");
let derrota = await rl.question("Digite o numero de derrotas: ");
let saldoVitorias = vitoria - derrota;
let nivel;

switch (true) {
  case saldoVitorias < 10:
    nivel = "Ferro";
    break;
  case saldoVitorias >= 10 && saldoVitorias <= 20:
    nivel = "Bronze";
    break;
  case saldoVitorias >= 21 && saldoVitorias <= 50:
    nivel = "Prata";
    break;
  case saldoVitorias >= 51 && saldoVitorias <= 80:
    nivel = "Ouro";
    break;
  case saldoVitorias >= 81 && saldoVitorias <= 90:
    nivel = "Diamante";
    break;
  case saldoVitorias >= 91 && saldoVitorias <= 100:
    nivel = "Lendário";
    break;
  default:
    nivel = "Imortal";
    break;
}

console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);

rl.close();