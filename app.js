let = listaDeNumerosSorteados = [];
let limiteNumero = 100;
let numeroSecreto = gerarNumero();
// o RETURN vai retornar o valor gerado e armazenar na variavel numeroSecreto

let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ("speechSunthesis" in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-br";
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speench API não suportada neste navegador.");
  }
}

function exibirMsg() {
  exibirTexto("h1", "Jogo do Número Secreto");
  exibirTexto("p", `Escolha um número entre 1 e ${limiteNumero}`);
}

exibirMsg();
//sempre precisa chamar a função, caso contrario nao vai funcionar.

// as funções precisam de um nome e de chaves
function verificarChute() {
  let chute = document.querySelector("input").value;
  // quando temos o input e queremos apenas o valor, colocamos .value
  // INPUT = entrada de usuario
  if (chute == numeroSecreto) {
    exibirTexto("h1", "Parabéns, você acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    //tentativas é maior q 1? se sim 'tentativas', se nao 'tentativa'.
    exibirTexto(
      "p",
      `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    //id = identificador unico
  } else {
    chute > numeroSecreto
      ? exibirTexto("p", `O número secreto é menor que ${chute}.`)
      : exibirTexto("p", `O número secreto é maior que ${chute}.`);
    tentativas++;
    limparCampo();
  }
  // = - atribuir valor; == - comparar valor
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
  let = qtdDeElementosLista = listaDeNumerosSorteados.length;

  if (qtdDeElementosLista == limiteNumero) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumero();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
//serve para limpar o campo e o jogo ser reiniciado.

function reiniciarJogo() {
  numeroSecreto = gerarNumero();
  limparCampo();
  tentativas = 1;
  exibirMsg();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

// codigo abaixo para estudos estudos (feito apenas para testar conhecimentos e aprender sobre funções).

//function ehPar(numero){
//  return numero % 2 == 0;
//}
// pedir para o chat explicar essa linha do código

//function verificarNumero(numero) {
//  try {
//if (typeof numero !== 'number'){
//  throw new Error("O argumento deve ser um número");
//}

//else{
//  console.log("o argumento é um número");
//}

//let par = ehPar(numero); // chama a função ehPar
//return par;              // retorna o resultado booleano

//} catch (error) {
//console.log(error.message);
//return null;
//}
//}

//console.log(verificarNumero('4')); // vai imprimir: false
//console.log(verificarNumero(4));   // vai imprimir: true
