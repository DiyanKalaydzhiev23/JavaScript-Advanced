function solution(commands) {
    let list = [];

    function add(el) {
        list.push(el);
    }

    function remove(toRemove) {
        list = list.filter(el => el != toRemove);
    }

    function print() {
        console.log(list.join());
    }

    commands.forEach(c => {
        let [command, el] = c.split(' ');
        if (command == 'add') add(el);
        else if (command == 'remove') remove(el);
        else if (command == 'print') print();
    });
}

solution(['add hello',
    'add again',
    'remove hello',
    'add again', 
    'print']);
