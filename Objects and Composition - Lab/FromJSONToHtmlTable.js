function FromJSONToHTMLTable(input) {
    const data = JSON.parse(input);
    const table = ['<table>', '\n    <tr>'];

    for (let key of Object.keys(data[0])) {
        table.push(`<th>${escapeHtml(key)}</th>`);
    }
    table.push('</tr>');
    
    for (let object of data) {
        table.push('\n    <tr>');
        for (let value of Object.values(object)) {
            table.push(`<td>${escapeHtml(value)}</td>`);
        }
        table.push('</tr>');
    }

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    
    table.push('\n</table>');
    console.log(table.join(''));
}   

FromJSONToHTMLTable(`[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`);
