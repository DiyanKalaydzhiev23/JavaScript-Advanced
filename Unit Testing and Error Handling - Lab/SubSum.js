function sum(list, start, end) {
    if (!Array.isArray(list)) return NaN;
    else if (start < 0) start = 0;
    else if (end >= list.length) end = list.length - 1;
    return list.slice(start, end+1).reduce((a, b) => a + Number(b), 0);
}

console.log(sum([1, 2, 3, 4], -5, 19));
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));