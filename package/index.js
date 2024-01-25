// import { sum, addOne as add1 } from "./first";
import * as first from "./first";
import { firstName } from "./second";

console.log("Hello from entry point", firstName);
console.log(first.sum(2, 4));
console.log(first.addOne(5));
