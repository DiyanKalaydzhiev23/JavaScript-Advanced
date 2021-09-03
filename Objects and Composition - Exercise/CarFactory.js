function manufacture(requirements) {
    return {
        model: requirements['model'],
        engine: getEngine(requirements['power']),
        carriage: {type: requirements['carriage'], color: requirements['color']},
        wheels: getWheels(requirements['wheelsize'])
    }

    function getWheels(diameter) {
        if (diameter % 2 == 0) {
            diameter -= 1;
        }
        return [diameter, diameter, diameter, diameter];
    }

    function getEngine(power) {
        let engine = {};
        if (power >= 200) {
            engine['power'] = 200;
            engine['volume'] = 3500;
        } else if (power >= 120) {
            engine['power'] = 120;
            engine['volume'] = 2400;
        } else {
            engine['power'] = 90;
            engine['volume'] = 1800;
        }
        return engine;
    }
}

let car = { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 };


console.log(manufacture(car));
