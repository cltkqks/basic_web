function Person(name, first, second, third = 10) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
    return 'prototype: ' + (this.first + this.second);
}
 
// constructor
var kim = new Person('kim', 10, 20, 30);
kim.sum = function() {
    return 'this: ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());