// const myMap = new Map();
// console.log(myMap)

// myMap.set("name", "Haneena");
// myMap.set("age", 25);
// myMap.set({ city: "Malappuram" }, "Kerala"); // Object as key
// console.log(myMap);

// myMap.set("name", "Haneena").set("age", 25);
// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });



// let names="i'm Haneena"
// console.log("i'm haneena, \"developer\"")
// console.log(1<2>1)
// console.log(1>2<1) //(1>2=>false:0 athond )
// console.log(null+5) //5
// console.log(null+"5") //null5


// const sum=(a,b)=>{return a+b}
// console.log(sum(5,2))


// let x = 10;

// function test() {
//   let x = 20;  // This shadows the outer 'x'
//   console.log(x);  // Output: 20 (inner x is used)
// }

// test();
// console.log(x);  // Output: 10 (outer x is used)

// console.log(5+"5"-5)

// let a;
// console.log(a); // Output: undefined (variable is declared but not assigned)

// function test() {}
// console.log(typeof test); // Output: undefined (function does not return anything)

// a=null
// console.log(typeof typeof a)
// console.log(typeof undefined); // Output: "undefined"

// let a = 5;
// console.log(a++); // Output: 5 (value before increment)
// console.log(a);   // Output: 6 (value after increment)


// let c = 10; // Global variable

// function greet() {
//   console.log("Hello, world!");
// }

// greet(); // Calls the global function


// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5

// function outer() {
//   console.log("Outer function");
//   inner();
// }

// function inner() {
//   console.log("Inner function");
// }

// outer();

// function outer() {
//   let count = 0; // Variable in outer function

//   return function inner() {
//     count++; // Inner function accessing `count`
//     console.log(count);
//   };
// }

// const increment = outer(); // Returns the `inner` function
// increment(); // 1
// increment(); // 2
// increment(); // 3
// increment()

// function factorial(n) {
//     return n * factorial(n - 1); // No base case
// }

// factorial(5); // Stack overflow because there's no condition to stop recursion

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
    console.log("Access granted");
}

try {
    checkAge(16);
} catch (error) {
    console.error("Error:", error.message);
}
