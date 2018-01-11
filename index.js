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

  5)  inc(n) increments n and returns the result:
     ReferenceError: inc is not defined
      at Context.<anonymous> (test/index-test.js:25:3)

  6)  dec(n) decrements n and returns the result:
     ReferenceError: dec is not defined
      at Context.<anonymous> (test/index-test.js:29:3)

  7) makeInt(n) parses n as an integer and returns the parsed integer:
     ReferenceError: makeInt is not defined
      at Context.<anonymous> (test/index-test.js:34:5)

  8) makeInt(n) assumes base 10:
     ReferenceError: makeInt is not defined
      at Context.<anonymous> (test/index-test.js:38:5)

  9) makeInt(n) returns NaN as appropriate:
     ReferenceError: makeInt is not defined
      at Context.<anonymous> (test/index-test.js:42:5)

  10) preserveDecimal(n) preserves n's decimals (it parsesn as a floating point number) and returns the parsed number:
     ReferenceError: preserveDecimal is not defined
      at Context.<anonymous> (test/index-test.js:48:5)

  11) preserveDecimal(n) returns NaN as appropriate:
     ReferenceError: preserveDecimal is not defined
      at Context.<anonymous> (test/index-test.js:52:5)

