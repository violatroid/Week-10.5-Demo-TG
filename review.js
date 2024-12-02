//JS REVIEW

// VARIABLES - 

x = 123 // x is the identifier (name) and 123 is the value

camelCase = "used for most variables"

TitleCase = "used for class names and module names"

TAX_RATE = 0.08 

// Data Types - shape/size of the data in memory 
// basic.primative data types

n = 123.456 //Number
s = "" //String
d = new Date() //defaults to now and holds both date and time using unix timestamps internally ms 1/1/1970

//complex data types
list = [] //Array - a ordered list of values can be accessed by index
dict = {} //Object - key value pairs like a dictionary where values can be pulled out by key/name

// EXPRESSIONS
// mathemtical expressions
e = 6 * 7; // * is multiplication/times, 

result = false || true //expression is true if eother is true as || can read as OR
console.log(result === true) //will print true as result will be true

//logical expressions and logical operators && is AND, || is OR, ! is NOT

//comparisons - logic pt 2

a == b //equal value - loose | exmaple "123" === 123 is true
a === b //same value and same data type - exact
a < b //less than
a > b // greater than
a >= b //greater than or equal to 
a <= b //less than or equal to
a != b //not equal to

// CONDITIONAL STATEMENTS - if/else/else is, or switch/case/break
allGood = true
if (allGood) {
    console.log("awesome")
} else {
    console.log("awwww");
}
limit = 10

fruit = ["apple", "banana", "cherry"]
for (let fruitIndex = 0; fruitIndex < fruit.length; fruitIndex+++) {
    console.log(fruitIndex, fruit[fruitIndex]);
}
// CODE ORGANIZATION pt 1 - defining functions - named blocks of code
function add(a, b) {
    return a + b; //return a single value
}