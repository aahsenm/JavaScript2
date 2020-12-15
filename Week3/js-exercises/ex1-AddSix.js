/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

 'use strict';

function createBase(number) {

  function addNumber () {
    return number = number + 9;
  }

  return addNumber;
}


const addSix = createBase(6);

console.log(addSix());
console.log(addSix());
console.log(addSix());
