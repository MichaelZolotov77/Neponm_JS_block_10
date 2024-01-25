const x = 1;
console.log("Hello from first.js"); // отпечатается, хотя не импортировано
// так как код в модуле все равно выполняется

function addOne(num) {
  return x + num;
}

function sum(a, b) {
  return a + b;
}

export { sum, addOne };
