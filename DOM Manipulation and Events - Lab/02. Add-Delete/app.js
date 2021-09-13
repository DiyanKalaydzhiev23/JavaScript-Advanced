function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const liElement = createElement('li', input.value);
    const delLink = createElement('a', '[Delete]');

    delLink.href = '#';
    delLink.addEventListener('click', onClick);

    liElement.appendChild(delLink);
    items.appendChild(liElement);
    input.value = '';


    function onClick(event) {
        event.target.parentNode.remove();
    }

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}