import { sum, addOne as add1, firstName, x } from "./src/helpers";
// import * as first from "./first";
// import { firstName } from "./src/helpers/second";
// import print from "./src/helpers/third";

// доступны из разных файлов за счет реэкспорта
console.log("Hello from entry point", firstName);
console.log(sum(2, 4));
console.log(add1(5));
