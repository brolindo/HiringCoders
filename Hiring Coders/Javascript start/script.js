console.log("Hello World!");

var myName = "Brolin";
var $myName = " Wrangler"; //Não recomendável utilizar essas duas notações
var _myName = " Morais"; //Não recomendável utilizar essas duas notações
console.log(myName+$myName+_myName);

{
    var name = "Brolindo"; // escopo global ou de funções. POdem ser atualizadas ou reatribuidas
    //dentro desses escopos

    // escopo bloqueados, não é possivel acessa-las fora do escopo
    let language = "Javascript"; // só podem ser atualizadas
    const pattern = "ECMAScript"; //não podem ser atualizadas/reatribuidas e precisam ser inicializadas
}

//Hoisting -->