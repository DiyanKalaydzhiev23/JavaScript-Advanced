function solve(commands) {
    const objects = {};

    function create(objName) {
        objects[objName] = {};
    }

    function inherit(objName, toInherit) {
        objects[objName] = Object.create(objects[toInherit]);
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        result = [];
        for (const prop in objects[name]) {
            result.push(`${prop}:${objects[name][prop]}`);
        }
        console.log(result.join(', '));
    }

    commands.forEach(c => {
        c = c.split(' ');
        if (c.length == 4) {
            if (c[0] == 'create') {
                inherit(c[1], c[3]);
            } else {
                set(c[1], c[2], c[3]);
            }
        } else {
            if (c[0] == 'create') {
                create(c[1]);
            } else {
                print(c[1]);
            }
        }
    });
}

// solve(['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2']);

let commands = ['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'];
solve(commands);