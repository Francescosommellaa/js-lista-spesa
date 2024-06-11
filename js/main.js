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


// Seleziona tutti gli elementi 'li' nel documento
var listItems = document.querySelectorAll('li');

// Per ogni elemento 'li'...
listItems.forEach(function(listItem) {
    // Aggiungi un gestore di eventi 'click'
    listItem.addEventListener('click', 
        function() {
        // Alterna la classe 'checked' ogni volta che l'elemento viene cliccato
        this.classList.toggle('checked');

        // Se l'elemento ha la classe 'checked', aggiungi un'icona di spunta all'inizio del testo
        // Altrimenti, rimuovi l'icona di spunta dal testo
        if (this.classList.contains('checked')) {
            this.textContent = this.textContent + ' ✔';
        } else {
            this.textContent = this.textContent.slice(0, -2);
        }
        });
});