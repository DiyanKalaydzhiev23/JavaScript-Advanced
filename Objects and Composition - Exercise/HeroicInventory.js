function makeRegister(data) {
    const register = [];

    for (i = 0; i < data.length; i++) {
        let [name, level, items] = data[i].split(" / ");
        items = items ? items.split(', '): [];
        register.push({name, level: Number(level), items});
    }
    return JSON.stringify(register);
}


console.log(makeRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12',
'Hes / 1 / Desolator, Sentinel, Antara']));
