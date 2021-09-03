function calorieObject(list) {
    const result = {};

    for (i = 0; i < list.length; i += 2) {
        result[list[i]] = Number(list[i+1]);
    }

    console.log(result);
}
