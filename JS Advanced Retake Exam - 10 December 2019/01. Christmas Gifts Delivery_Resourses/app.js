function solution() {
    const addBtn = document.getElementsByTagName('button')[0];
    const input = document.getElementsByTagName('input')[0];
    const [add, list, sent, discarded] = Array.from(document.getElementsByClassName('card'));

    addBtn.addEventListener('click', addToList);

    function addToList(e) {
        const li = document.createElement('li');
        const sendBtn = document.createElement('button');
        const discardBtn = document.createElement('button');
        let ul = list.children[1];

        li.textContent = input.value;
        sendBtn.textContent = 'Send';
        discardBtn.textContent = 'Discard';

        li.className = 'gift';
        sendBtn.id = 'sendButton';
        discardBtn.id = 'discardButton';

        sendBtn.addEventListener('click', sentGifts);
        discardBtn.addEventListener('click', discardGifts);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        ul.appendChild(li);

        const sortedChildren = Array.from(ul.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        sortedChildren.forEach(l => { ul.appendChild(l) });
        input.value = '';
    }

    function sentGifts(e) {
        const liElement = e.target.parentNode;
        const sendBtn = liElement.querySelector('#sendButton');
        const discardBtn = liElement.querySelector('#discardButton');

        liElement.removeChild(sendBtn);
        liElement.removeChild(discardBtn);
        console.log(liElement)

        sent.children[1].appendChild(liElement);
    }

    function discardGifts(e) {
        const liElement = e.target.parentNode;
        const sendBtn = liElement.querySelector('#sendButton');
        const discardBtn = liElement.querySelector('#discardButton');

        liElement.removeChild(sendBtn);
        liElement.removeChild(discardBtn);
        console.log(liElement)

        discarded.children[1].appendChild(liElement);
    }
}