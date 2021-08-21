function solve(text) {
    let result = text.toUpperCase()
      .match(/[A-Za-z]+/g)
      .join(', ');
    
    console.log(result);
  }

solve('hi, my name is!')