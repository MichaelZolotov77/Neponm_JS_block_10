import { sum, addOne as add1 } from "./first";
// import * as first from "./first";
import { firstName } from "./second";
import print from "./third";

console.log("Hello from entry point", firstName);
console.log(sum(2, 4));
console.log(add1(5));
