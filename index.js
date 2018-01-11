var a, b;

function add(a, b) {
 a += b;
}

function subtract(a, b) {
  a -= b;
}

function multiply(a, b) {
  a *= b;
}
function  divide(a, b) {
  a /= b;
}

  function inc(n, base) {
    var parsed = parseInt(n, base);
    if (isNaN(parsed)) { return 0 }
  return parsed n++;
  }
  
  function roughScale(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0

  dec(n);
  return n--;
 
  makeInt(n); 
  parseInt('n');

preserveDecimal(n);
parseFloat('n');
returns the parsed number:
     ReferenceError: preserveDecimal is not defined
      at Context.<anonymous> (test/index-test.js:48:5)

  preserveDecimal(n) 
  return NaN;
