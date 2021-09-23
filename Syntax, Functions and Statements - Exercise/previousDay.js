function solve(y, m, d) {
    let dateString = y + '-' + m + '-' + d;
    let event = new Date(dateString);
    event.setDate(d-1);
    console.log(event.getFullYear()+`-` + Number(event.getMonth() + 1)+ '-' + event.getDate());
}

console.log(solve(2016, 3, 1));
