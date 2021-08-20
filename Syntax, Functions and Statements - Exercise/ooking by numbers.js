function cook(num, ...args) {
    let commands = Array(...args);

    for (i = 0; i < commands.length; i++) {
        command = commands[i];

        switch (command) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num -= num * 0.20; break;
        }
        console.log(num)
    }
}


cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
