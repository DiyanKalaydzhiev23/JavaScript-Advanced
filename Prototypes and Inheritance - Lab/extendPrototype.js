class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
}

function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendPrototype(Person);
let a = new Person('ivan', 'gmail');
console.log(a.toSpeciesString());