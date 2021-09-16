function previousDay(year, month, day) {
    const date = new Date(year, month, day);
    date.setDate(date.getDate() - 1);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}

console.log(previousDay(2016, 9, 30));