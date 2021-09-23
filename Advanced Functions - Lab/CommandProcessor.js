function solution() {
    let string = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.slice(0, string.length-n);
    }

    function print() {
        console.log(string);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
