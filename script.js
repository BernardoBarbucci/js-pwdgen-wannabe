// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let questionOne = prompt ("What's your name?");
let questionTwo = prompt ("What's your surname?");
let questionThree = prompt ("How old are you?");

let infoUser =  questionOne + " " + questionTwo + " " + questionThree;

document.getElementById('output').innerHTML = 'Your infos are: ' + infoUser;







