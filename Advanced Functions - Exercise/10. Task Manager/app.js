function solve() {
    const sections = document.getElementsByTagName('section');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const task = document.getElementById('task');
        const desc = document.getElementById('description');
        const date = document.getElementById('date');

        if (task.value.length > 0 && desc.value.length > 0 && date.value.length > 0) {
            const articleEl = document.createElement('article');
            const nameHolder = document.createElement('h3');
            const descHolder = document.createElement('p');
            const dateHolder = document.createElement('p');
            const divEl = document.createElement('div');
            const startBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            nameHolder.textContent = task.value;
            descHolder.textContent = `Description: ${desc.value}`;
            dateHolder.textContent = `Due Date: ${date.value}`;
            startBtn.textContent = 'Start';
            deleteBtn.textContent = 'Delete';

            startBtn.addEventListener('click', inProgress);
            deleteBtn.addEventListener('click', deleteRow);

            divEl.className = 'flex';
            startBtn.className = 'green';
            deleteBtn.className = 'red';

            divEl.appendChild(startBtn);
            divEl.appendChild(deleteBtn);
            
            articleEl.appendChild(nameHolder);
            articleEl.appendChild(descHolder);
            articleEl.appendChild(dateHolder);
            articleEl.appendChild(divEl);

            sections[1].children[1].appendChild(articleEl);

        }
    }

    function inProgress(e) {
        const article = e.target.parentNode.parentNode;
        const [leftBtn, rightBtn] = article.children[3].children;
        sections[2].children[1].appendChild(article);

        leftBtn.removeEventListener('click', inProgress);
        rightBtn.removeEventListener('click', deleteRow);
        leftBtn.textContent = 'Delete';
        rightBtn.textContent = 'Finish';
        leftBtn.className = 'red';
        rightBtn.className = 'orange';
        leftBtn.addEventListener('click', deleteRow);
        rightBtn.addEventListener('click', finish);
        deleteRow(e);
    }

    function finish(e) {
        const article = e.target.parentNode.parentNode;
        article.children[3].remove();
        sections[3].children[1].appendChild(article);
        deleteRow(e);
    }

    function deleteRow(e) {
        e.target.parentNode.parentNode.remove();
    }
}
