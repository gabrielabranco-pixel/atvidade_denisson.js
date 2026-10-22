/*
alert("Hello,World");
document.write("hello world"); 
*/

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

/*
function acao2(){
    resp.innerHTML += '<p>Clicou no segundo botão</p>'

    switch(prompt("Como está o tempo?Um "))
}
*/