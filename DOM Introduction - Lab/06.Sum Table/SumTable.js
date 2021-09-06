function sumTable() {
    const rows = document.querySelectorAll('tbody tr');
    const total = rows[rows.length - 1].lastChild;
    let sum = 0;

    for (i = 1; i < rows.length-1; i++) {
        let cost = Number(rows[i].lastChild.textContent);
        console.log(cost);
        sum += cost;
    }

    total.textContent = sum;
}