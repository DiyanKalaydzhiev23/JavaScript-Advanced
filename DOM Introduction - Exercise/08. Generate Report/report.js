function generateReport() {
    const inputs = Array.from(document.querySelectorAll('th input'));
    const outputArea = document.getElementById('output');
    const columns = document.querySelectorAll('th');
    const rows = Array.from(document.querySelectorAll('tr'));
    const report = [];
    rows.forEach(el => report.push({}));

    for (i = 0; i < inputs.length; i++) {
        let colName = columns[i].textContent.toLowerCase().trim();
        if (inputs[i].checked) {
            for (j = 1; j < rows.length; j++) {
                let onePersonInfo = rows[j].children;
                report[j][colName] = onePersonInfo[i].textContent;
            }
        }
    }
    report.shift();
    outputArea.textContent = JSON.stringify(report);
}