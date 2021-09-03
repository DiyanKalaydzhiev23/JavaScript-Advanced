function parseTable(table) {
    const parsed = [];
    for (i=1; i < table.length; i++) {
        let [space, town, latitude, longitude] = table[i].split('|');
        parsed.push({'Town': town.trim(),
        'Latitude': Number(Number(latitude.trim()).toFixed(2)),
        'Longitude': Number(Number(longitude.trim()).toFixed(2))});
    }
    
    return JSON.stringify(parsed);
}


console.log(parseTable(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
