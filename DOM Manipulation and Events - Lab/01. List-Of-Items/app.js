function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    items.appendChild(liElement);
    input.value = '';
}