function solve() {
    const addBtn = document.getElementsByTagName('button')[0];
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const lectureName = document.getElementsByName('lecture-name')[0];
        const date = document.getElementsByName('lecture-date')[0];
        const module = document.getElementsByName('lecture-module')[0];

        if (lectureName.value == '' || date.value == '' || module.value == 'Select module') {
            return
        }

        const divModules = document.getElementsByClassName('modules')[0];
        const div = document.createElement('module');
        const moduleTitle = document.createElement('h3');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const lectureDateTitle = document.createElement('h4');
        const delBtn = document.createElement('button');
        const dateFormatted = date.value.split('-').join('/').split('T').join(' - ');
        let exists = false;

        moduleTitle.textContent = module.value.toUpperCase() + '-MODULE';
        lectureDateTitle.textContent = `${lectureName.value} - ${dateFormatted}`;
        delBtn.textContent = 'Del';

        div.className = 'module';
        li.className = 'flex';
        delBtn.className = 'red';

        delBtn.addEventListener('click', (e) => {
            const ul = e.target.parentNode.parentNode;
            if (ul.children.length > 1) e.target.parentNode.remove();
            else ul.parentNode.remove();
        });

        Array.from(divModules.children).forEach(d => {
            if (moduleTitle.textContent == d.children[0].textContent) {
                const ul = d.children[1];
                li.appendChild(lectureDateTitle);
                li.appendChild(delBtn);
                ul.appendChild(li);
                exists = true;
                const sorted = Array.from(d.children[1].children).sort((a, b) => {
                    let aSplit = a.children[0].textContent.split(' - ');
                    let bSplit = b.children[0].textContent.split(' - ');

                    aSplit.shift();
                    bSplit.shift();

                    a = aSplit.join('T');
                    b = bSplit.join('T');

                    aSplit = a.split('-');
                    bSplit = b.split('-');

                    a = aSplit.join('/');
                    b = bSplit.join('/');
                    
                    return a.localeCompare(b);
                });
                sorted.forEach(c => d.children[1].appendChild(c));
            }
        });

        if (exists) return;

        li.appendChild(lectureDateTitle);
        li.appendChild(delBtn);
        ul.appendChild(li);
        div.appendChild(moduleTitle);
        div.appendChild(ul);
        divModules.appendChild(div);
    }
};