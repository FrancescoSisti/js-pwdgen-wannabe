// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine stampa in console

/*
1-Recupero gli elementi della pagina che mi servono
2-Chiedere all'utente il nome
3-Chiedere all'utente il cognome
4-Chiedere il colore preferito
5-Stampare il messaggio in pagina
*/

//Check script
console.log('JS OK');

// Recupero gli elementi
const passwordElement = document.getElementById('password');
console.log(passwordElement);

// Raccolgo i dati

// Messaggio prima della password
const message = 'La tua password è: ';
// Nome
const nome = prompt('Dimmi il tuo nome', 'Francesco');
console.log(nome);
// Cognome
const cognome = prompt('Dimmi il tuo cognome', 'Sisti');
console.log(cognome);
//Colore preferito
const colorePreferito = prompt('Dimmi il tuo colore preferito', 'Giallo');
console.log(colorePreferito);

// Calcola il numero totale di caratteri
const numeroCaratteri = nome.length + cognome.length + colorePreferito.length;

// CREO LA PASSWORD
const pw = nome + cognome + colorePreferito + numeroCaratteri;
console.log(pw);

// Output della password
passwordElement.innerHTML = message + pw;