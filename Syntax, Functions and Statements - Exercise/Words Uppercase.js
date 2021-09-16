function solve(text) {
    let result = text.toUpperCase()
      .match(/[A-Za-z0-9]+/g)
      .join(', ');
    
    console.log(result);
  }

solve('hi, my name is!')