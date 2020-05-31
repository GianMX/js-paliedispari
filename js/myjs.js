// PALINDROMI
function parolaPalindroma(){
  var parola = prompt("digita la parola");
  var verifica = parola.split('').reverse().join('');

  if (parola == verifica) {
    alert( parola + " è una parola palindroma");
  }else{
    alert( parola + " non è una parola palindroma");
  }
};
parolaPalindroma();

// PARI E DISPARI
