//import { a,b,add } from './export.js';

const { a,b,add } = await import("./export05.mjs");

console.log(add(a,b));