// // PALINDROMI
// function parolaPalindroma(){
//   var parola = prompt("digita la parola");
//   var verifica = parola.split('').reverse().join('');
//
//   if (parola == verifica) {
//     alert( parola + " è una parola palindroma");
//   }else{
//     alert( parola + " non è una parola palindroma");
//   }
// };
// parolaPalindroma();



// // PARI E DISPARI
// var pariDispari = prompt("Pari o Dispari?");
// while (pariDispari.length === 0) {
//   pariDispari = prompt("Errore.Inserisci la tua scelta: pari o dispari");
// }
// var numeroGiocatore = parseInt(prompt("scegli tra 1 e 5"));
// while (isNaN(numeroGiocatore) || numeroGiocatore === 0 || numeroGiocatore > 5) {
//   numeroGiocatore = parseInt(prompt("Numero non valido! Inserisci un numero tra 1 e 5"));
// }
// var numeroComputer = getRandomIntInclusive(1,5);
// var tot = numeroGiocatore + numeroComputer;
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1));
// }
//
// if (tot % 2 == 0) {
//   alert("bim bum bam! " + tot + " è pari");
// }
// else {
//   alert("bim bum bam! " + tot + " è dispari");
// }
