// CommonJS
import { z } from "./third.js"; // после переименования файла можно уже так
import { x } from "./second.mjs";
console.log(z);
console.log(x);
