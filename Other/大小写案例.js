
// 声明式编程
function f1() {
  const transform1 = (str) => {
    if (typeof str === "string") {
      return `${str.toUpperCase()}!`;
    }
    return "Not a string";
  };

  const transform2 = (str) => {
    if (typeof str === "string") {
      return `${str.toLowerCase()}!`;
    }
    return "Not a string";
  };
  console.log(transform1("hello world")); // "HELLO WORLD !"
  console.log(transform2("HELLO WORLD")); // "hello world !"
}

// 函数是编程
function f2() {
  const { flow } = require("lodash/fp");
  const toUpper = (str) => str.toUpperCase();
  const toLower = (str) => str.toLowerCase();
  const exclaim = (str) => `${str}!`;
  const isString = (str) => (typeof str === "string" ? str : "Not a string");
  const transform1 = flow(isString, toUpper, exclaim);
  const transform2 = flow(isString, toLower, exclaim);
  console.log(transform1("hello world")); // "HELLO WORLD !"
  console.log(transform2("HELLO WORLD")); // "hello world !"
}

f1()
f2()