//Carimacamento post HTLM e CSS
$(document).ready(function(){

  // gen variabili
  var arraypc = [];
  var arrayutente = [];
  var ricordati = []

  // generazione di 5 numeri casuali diversi
  for (var i = 0; arraypc.length < 5; i++) {
    var randomnumberpc = Math.floor(Math.random() * 100 ) + 1;
    if (!arraypc.includes(randomnumberpc)) {
      arraypc.push(randomnumberpc);
    }
  }
  // mostrare un alert con i 5 numeri
  alert('i numeri che devi ricordare sono : ' + arraypc);

//timer e avvio funzione 
setTimeout(answer, 30000);




function answer() {
  // funzione da inserire nel set Timeout
  for (var i = 1; arrayutente.length < 5; i++) {
    var numberutente = parseInt(prompt('inserisci un numero che ti ricordi '+ '('+ arrayutente.length + ' di 5)'));
    if (!arrayutente.includes(numberutente)) {
      arrayutente.push(numberutente);
      if (arraypc.includes(numberutente)) {
        ricordati.push(numberutente);
      }
    }
    else if (arrayutente.includes(numberutente)) {
      alert('NUMERO GIà INSERITO');
    }
    else if (numberutente.isNaN()) {
      alert('NON HAI INSERITO UN NUMERO')
    }
  }
  console.log('i numeri ricordati sono: ' + ricordati.length);
}


































});
