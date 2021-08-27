function operateArray(commands) {
    let number = 1;
    let modifiedArray = [];

    for (let command of commands) {
        if (command == 'add') {
            modifiedArray.push(number);
        } else {
            modifiedArray.pop();
        }
        number += 1;
    }

    if (modifiedArray.length != 0) {
        console.log(modifiedArray.join('\n'));
    } else {
        console.log('Empty');
    }
}


operateArray(['add', 
'add', 
'remove', 
'add', 
'add']);

operateArray(['remove', 
'remove', 
'remove']
);