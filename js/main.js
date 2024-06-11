// Definizione della lista della spesa come un array di stringhe
var shoppingList = ['Pane', 'Latte', 'Uova', 'Formaggio', 'Salumi', 'Acqua', 'Vino', 'Nutella'];

// Ottenimento dell'elemento 'ul' dal documento HTML utilizzando il suo ID
var listElement = document.getElementById('shoppingList');

// Inizializzazione del contatore a 0
var i = 0;

// Ciclo while che continua fino a quando non si è raggiunto l'ultimo elemento dell'array della lista della spesa
while (i < shoppingList.length) {
    // Creazione di un nuovo elemento 'li'
    var listItem = document.createElement('li');

    // Impostazione del contenuto dell'elemento 'li' come l'elemento corrente della lista della spesa
    listItem.textContent = shoppingList[i];

    // Aggiunta dell'elemento 'li' all'elemento 'ul' nel documento HTML
    listElement.appendChild(listItem);

    // Incremento del contatore
    i++;
}