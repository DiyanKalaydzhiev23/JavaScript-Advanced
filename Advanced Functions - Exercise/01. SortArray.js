function solve(list, typeSort) {
    list.sort((a, b) => a - b);
    if (typeSort == 'desc') list.reverse();
    return list;
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');