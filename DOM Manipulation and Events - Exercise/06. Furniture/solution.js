function solve() {
    const [generateBtn, buyBtn] = document.querySelectorAll('div button');
    const [textToAdd, result] = document.getElementsByTagName('textarea');
    const table = document.getElementsByTagName('tbody')[0];

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate(event) {
        const furniture = JSON.parse(textToAdd.value);
        for (let f of furniture) { 
            const furnitureData = Object.values(f);
            const row = document.createElement('tr');
            const elements = [document.createElement('img'),
                              document.createElement('p'),
                              document.createElement('p'),
                              document.createElement('p'),
                              document.createElement('input')]

            elements[0].src = furnitureData[0];
            row.appendChild(document.createElement('td').appendChild(elements[0]));
            for (i = 1; i < 4; i++) {
                let col = document.createElement('td');
                elements[i].textContent = furnitureData[i];
                col.appendChild(elements[i]);
                row.appendChild(col);
            }
            elements[4].type = 'checkbox';
            row.appendChild(document.createElement('td').appendChild(elements[4]));
            table.appendChild(row);
        }
    }

    function buy(event) {
        const boughtFurniture = [];
        const rows = table.getElementsByTagName('tr');
        let totalPrice = 0;
        let decFactorSum = 0;

        for (let row of rows) {
            if (row.getElementsByTagName('input')[0].checked) {
                let pElements = row.getElementsByTagName('p');
                boughtFurniture.push(pElements[0].textContent);
                totalPrice += Number(pElements[1].textContent);
                decFactorSum += Number(pElements[2].textContent);
            }
        }

        result.textContent += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
        result.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        result.textContent += `Average decoration factor: ${decFactorSum/boughtFurniture.length}`

    }
}