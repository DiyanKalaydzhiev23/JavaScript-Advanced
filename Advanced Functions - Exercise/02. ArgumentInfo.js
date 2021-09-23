function solve(...args) {
    const typesData = {};

    args.forEach(a => {
        let type = typeof(a);
        console.log(`${type}: ${a}`);
        
        if (type in typesData) {
            typesData[type]++;
        } else {
            typesData[type] = 1;
        }
    });

    const items = Object.keys(typesData).map(function(key) {
        return [key, typesData[key]];
    });
      
    items.sort(function(first, second) {
    return second[1] - first[1];
    });

    items.forEach(i => console.log(`${i[0]} = ${i[1]}`));
}

solve('dog', 'cat', 42, function () { console.log('Hello world!'); });
