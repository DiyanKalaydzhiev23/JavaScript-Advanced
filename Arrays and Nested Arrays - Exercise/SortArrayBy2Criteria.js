function sortByTwo(elements) {
    elements.sort((a, b) => a.length > b.length ? 1 : -1);
    elements.sort((a, b) => a.length == b.length ? a.localeCompare(b) : 0);
    console.log(elements.join('\n'));
}

sortByTwo(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);

sortByTwo(['test', 
'Deny', 
'omen', 
'Default']);

sortByTwo(['alpha', 
'beta', 
'gamma']);
