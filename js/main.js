var shoppingList = ['Pane', 'Latte', 'Uova', 'Formaggio', 'Salumi', 'Acqua', 'Vino', 'Nutella'];
var listElement = document.getElementById('shoppingList');
var i = 0;
while (i < shoppingList.length) {
    var listItem = document.createElement('li');
    listItem.textContent = shoppingList[i];
    listElement.appendChild(listItem);
    i++;
}