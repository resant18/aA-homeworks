function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x); // return 'in block'
  }
  console.log(x); // return 'in block', because var define functionally-scoped variable
}

mysteryScoping1();

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block'; 
    console.log(x); // return 'in block'
  }
  console.log(x); // return 'out of block', because const declared block -scoped variable
}

mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x); // SyntaxError: Identifier 'x' has already been declared
  }
  console.log(x); // didn't get a chance to return anything.
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'; // return 'in block'
    console.log(x);
  }
  console.log(x); // return 'out of block'
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'; 
    console.log(x); // it is not printed?? Why??
  }
  let x = 'out of block again'; 
  console.log(x); // SyntaxError: Identifier 'x' has already been declared
}

//madLib
function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`)
}

function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) == -1 ? false : true;
}

function fizzBuzz(array) {
  fizzArray = [];
  array.forEach(el => {
    if (el % 3 == 0 && el % 5 == 0 ) return;  // can't use continue here for forEach
    else if (el % 3 == 0) fizzArray.push(el);
    else if (el % 5 == 0) fizzArray.push(el);
  })
  return fizzArray;
}

function isPrime(number) {  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return number > 1
}

function sumOfNPrimes(n) {
  firstNPrimes = () => {
    primes = [];
    number = 2;
    while (primes.length < n ) {
      if (isPrime(number) == true ) primes.push(number);
      number++;
    }
    return primes;
  }
  // console.log(firstNPrimes());
  const add = (a, b) =>  a + b;
  // use reduce to sum our array
  return sum = firstNPrimes().reduce(add);
}

console.log(sumOfNPrimes(5));