sayHello()

let promptFilter = prompt()

let arrayPrompt = [promptFilter]

const textFilter = arrayPrompt.filter((person) => person.length > 6);
console.log(textFilter);

let calculator = {
    num1: 10,
    num2: 5,
    substract: function () {
        return this.num1 - this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    }, 
    divide: function () {
        return this.num1 / this.num2;
    }
//     add: =
};

console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.divide());

function sayHello() {
    console.log("Hello world");  // ეს კონტენტი შექმნილი იყო 29 ზოლში მაგრამ გამოძახებულია პირველშივე ეს შესაძლებელია function ჰოისტინგის მეშვეობით.
}                // სხვა შემთხვევაში არ იმუშავებს.