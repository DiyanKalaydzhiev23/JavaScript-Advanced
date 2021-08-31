function population(cities) {
    const result = {};

    for (city of cities) {
        let tokens = city.split(" <-> ");
        let key = tokens[0];
        let value = Number(tokens[1]);
        
        if (result.hasOwnProperty(key)) {
            value += result[key];
        }
        result[key] = value;
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} : ${value}`)
    }
}

population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
