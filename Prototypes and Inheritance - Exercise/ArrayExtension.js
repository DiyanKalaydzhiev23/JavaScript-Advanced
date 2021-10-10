let myArr = [1, 2, 3];

(function () { 
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function(n) {
        return [...this].splice(n);
    }
    
    Array.prototype.take = function(n) {
        return [...this].splice(0, n);
    }
    
    Array.prototype.sum = function() {
        return this.reduce((a, b) => a + b);
    }
    
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
    
})();


console.log(myArr.skip(1));
console.log(myArr.skip(1));
