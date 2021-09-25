function solve() {
    document.getElementById('container').querySelector('button').addEventListener('click', addMovie);
    const clearBtn = document.getElementById('archive').querySelector('button');
    clearBtn.addEventListener('click', clear);

    function addMovie(e) {
        e.preventDefault();
        const name = document.getElementById('container').querySelectorAll('input')[0];
        const hall = document.getElementById('container').querySelectorAll('input')[1];
        const ticketPrice = document.getElementById('container').querySelectorAll('input')[2];
        const ulElement = document.getElementById('movies').querySelector('ul');

        if (name.value.length > 0 && hall.value.length > 0 && Number(ticketPrice.value) > 0) {
            const liElement = document.createElement('li');
            const nameHolder = document.createElement('span');
            const hallHolder = document.createElement('strong');
            const divElement = document.createElement('div');
            const ticketSold = document.createElement('input');
            const priceHolder = document.createElement('strong');
            const archiveBtn = document.createElement('button');
            
            nameHolder.textContent = name.value;
            hallHolder.textContent = `Hall: ${hall.value}`;
            priceHolder.textContent = Number(ticketPrice.value).toFixed(2);
            ticketSold.placeholder = 'Tickets Sold';
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archive);
            
            divElement.appendChild(priceHolder);
            divElement.appendChild(ticketSold);
            divElement.appendChild(archiveBtn);

            liElement.appendChild(nameHolder);
            liElement.appendChild(hallHolder);
            liElement.appendChild(divElement);

            ulElement.appendChild(liElement); 

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function archive(e) {
        const ticketsSold = e.target.parentNode.querySelector('input');
        const ticketPrice = Number(e.target.parentNode.querySelector('strong').textContent);
        if (Number(ticketsSold.value) || ticketsSold.value === '0') {
            const name = e.target.parentNode.parentNode.querySelector('span');
            const liElement = document.createElement('li');
            const priceHolder = document.createElement('strong');
            const deleteBtn = document.createElement('button');

            e.target.parentNode.parentNode.remove();

            priceHolder.textContent = `Total amount: ${Number(ticketPrice * Number(ticketsSold.value)).toFixed(2)}`
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function(e) {e.target.parentNode.remove();});

            liElement.appendChild(name);
            liElement.appendChild(priceHolder);
            liElement.appendChild(deleteBtn);

            document.getElementById('archive').querySelector('ul').appendChild(liElement);
        }
    }

    function clear(e) {
        const rows = Array.from(e.target.parentNode.querySelectorAll('li'));
        rows.forEach(r => r.remove());
    }
}
