function getFibonator() {
    let nums = [];
    return function () {
        if (nums.length < 2) {
            nums.push(1);
        } else {
            nums.push(nums[nums.length -1] + nums[nums.length-2]);
        }
        return nums[nums.length-1];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
