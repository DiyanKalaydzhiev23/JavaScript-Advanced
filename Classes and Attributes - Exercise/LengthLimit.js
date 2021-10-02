class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        if (this.innerLength - n >= 0) {
            this.innerLength -= n;
        } else {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength < this.string.length) {
            return this.string.slice(0, this.innerLength) + '...';
        }
        return this.string;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
