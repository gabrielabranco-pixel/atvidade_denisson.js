/*
alert("Hello,World");
document.write("hello world"); 
*/

const { PureComponent } = require("react");

var resp = window.document.getElementById('saida');

//lembre - se que toda variável declarada aqui fora possui 
//Veja mais sobre escopo no seu matérial em PDF,

function acao1(){
   resp.innerHTML += '<p>Clicou no primeiro botão</p>'

   let a = prompt("Informe um numero");
   if (a === 6){
       resp.innerHTML += '<h1>Igual de 6</h1>';
  }else{
    resp.innerHTML += '<h1>Diferente de 6</h1>';
  }
}

function acao2() {
  resp.innerHTML += '<p>Clicou no segundo botão</p>'

  switch(prompt("Como está o tempo? Use chuvoso, ensolorado ou nublado.")) {
    //switch("chuvoso") {
    case"chuvoso":
     resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva</h1>';
     break;
    case "ensolarado":
     resp.innerHTML += '<h1>Vista roupas leves!</h1>';
     break;
    case "nublado":
     resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
     break;
    default:
      resp.innerHTML += '<h1>Tempo desconhecido</h1>';
      break;
  }
  }

  function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'

    let numero = prompt("Informe um número");
    for (let i = 0; i < numero; i++){
      resp.innerHTML += '<p>Paragrafo + 1 </p>';
    }
  }

  function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'

    let x = prompt("Informe um número");
    while (x <= 10) {
      resp.innerHTML += 'linha' + x + '<br/>';
      x++;
    }
  }

  function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>'

    let x = prompt("Informe um número");
    do {
      resp.innerHTML += 'linha'+x+'<br/>';
      x++;
    } while (x <= 10);
  }

  function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botão</p>'

    var myArray = [1,2,3,4,5,6,7,8,9,10,11];

    myArray.forEach(function(value, key){
      resp.innerHTML += 'Chave:'+key+'Valor:'+value+'<br/>';
    });
  }

  function acao7(){
    let entrada = "Bem vindo" + prompt("Informe seu Nome:");
    let saldacao = document.getElementById('titulo');
    saldacao.textContent = entrada;

    const collection = document.getElementsByName("animal");
      for (let i = 0; i < collection.lenght; i++) {
        if (collection[i].type == 'checkbox') {
            collection[i].checked = true;
        }
      }

      resp.innerHTML += 'Clicou no setimo botão'

      document.getElementsByTagName('p')[1].innerHTML = 'Texto do paragrafo 2 substituido com sucesso!';
      let teste = document.getElementsByName("paragrafo");
      teste[1].textContent = 'Texto do paragrado identificado por "paragrafo" na posição 1, substituido com sucesso!';
  }

  function acao8() {
    resp.innerHTML += '<p>Clicou no oitavo botão</p>';
    
    function calcularArea() {
      let area = 3*5;
      resp.innerHTML += '<h1>Area total:'+area+'</h1>';
      resp.innerHTML += '<h1>area total:'+area+'</h1>';
    }
    calcularArea();
  }

  function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>'
    let largura = prompt("Informe largura");
    let altura = prompt("Informe altura");

    function getArea(width, height) { //solicita 2 parametros
        let calculateArea = width * height;
        return calculateArea;
    }
    let area = getArea(largura, altura);
    resp.innerHTML += '<h1>Área total:' +area+ '</h1>';
  }
/*
function acao2(){
    resp.innerHTML += '<p>Clicou no segundo botão</p>'

    switch(prompt("Como está o tempo?Um "))
}
*/