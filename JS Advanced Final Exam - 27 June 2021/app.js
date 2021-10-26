window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add');
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const tbody = document.getElementById('furniture-list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (model.value === '' || description.value === '') return;
        if (Number(year.value) !== Math.abs(Number(year.value)) || year.value === '') return;
        if (Number(price.value) !== Math.abs(Number(price.value)) || price.value === '') return;
        
        const trInfo = document.createElement('tr');
        const trHide = document.createElement('tr');
        const modelTd = document.createElement('td');
        const priceTd = document.createElement('td');
        const buttonsTd = document.createElement('td');
        const yearTd = document.createElement('td');
        const descriptionTd = document.createElement('td');
        const moreBtn = document.createElement('button');
        const buyBtn = document.createElement('button');

        moreBtn.className = 'moreBtn';
        buyBtn.className = 'buyBtn';
        trInfo.className = 'info';
        trHide.className = 'hide';

        moreBtn.addEventListener('click', (e) => {
            e.target.textContent = 'Less Info';
        });

        modelTd.textContent = model.value;
        priceTd.textContent = Number(price.value).toFixed(2);
        moreBtn.textContent = 'More Info';
        buyBtn.textContent = 'Buy it';
        yearTd.textContent = `Year: ${year.value}`;
        descriptionTd.textContent = `Description: ${description.value}`;
        descriptionTd.colSpan = 3;

        buttonsTd.appendChild(moreBtn);
        buttonsTd.appendChild(buyBtn);
        trInfo.appendChild(modelTd);
        trInfo.appendChild(priceTd);
        trInfo.appendChild(buttonsTd);
        trHide.appendChild(yearTd);
        trHide.appendChild(descriptionTd);
        tbody.appendChild(trInfo);
        tbody.appendChild(trHide);
    });
}
