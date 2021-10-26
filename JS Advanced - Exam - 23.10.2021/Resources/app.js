window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const genre = document.getElementById('genre');
        const name = document.getElementById('name');
        const author = document.getElementById('author');
        const date = document.getElementById('date');

        if (genre.value === '' || name.value === '' ||
        author.value === '' || date.value === '') return;

        const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
        const hitsInfo = document.createElement('div');
        const img = document.createElement('img');
        const genreHolder = document.createElement('h2');
        const nameHolder = document.createElement('h2');
        const authorHolder = document.createElement('h2');
        const dateHolder = document.createElement('h3');
        const saveBtn = document.createElement('button');
        const likeBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        img.src = './static/img/img.png';

        genreHolder.textContent = `Genre: ${genre.value}`;
        nameHolder.textContent = `Name: ${name.value}`;
        authorHolder.textContent = `Author: ${author.value}`;
        dateHolder.textContent = `Date: ${date.value}`;
        saveBtn.textContent = 'Save song';
        likeBtn.textContent = 'Like song';
        deleteBtn.textContent = 'Delete';

        saveBtn.className = 'save-btn';
        likeBtn.className = 'like-btn';
        deleteBtn.className = 'delete-btn';
        hitsInfo.className = 'hits-info';

        saveBtn.addEventListener('click', save);
        likeBtn.addEventListener('click', like);
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove());

        hitsInfo.appendChild(img);
        hitsInfo.appendChild(genreHolder);
        hitsInfo.appendChild(nameHolder);
        hitsInfo.appendChild(authorHolder);
        hitsInfo.appendChild(dateHolder);
        hitsInfo.appendChild(saveBtn);
        hitsInfo.appendChild(likeBtn);
        hitsInfo.appendChild(deleteBtn);
        allHitsContainer.appendChild(hitsInfo);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    });

    function like(e) {
        const pLikes = document.getElementsByClassName('likes')[0].children[0];
        const number = Number(pLikes.textContent.split(': ')[1]);
        pLikes.textContent = `Total Likes: ${number + 1}`;
        e.target.disabled = true;
    }

    function save(e) {
        const hitsInfo = e.target.parentNode;
        const saveBtn = hitsInfo.children[5];
        const likeBtn = hitsInfo.children[6];
        const savedContainer = document.getElementsByClassName('saved-container')[0];
        
        saveBtn.remove();
        likeBtn.remove();
        
        savedContainer.appendChild(hitsInfo);
    }
}