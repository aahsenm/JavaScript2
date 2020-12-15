/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

// The output will be 12. Firstly, it will search for the value of 'a' within the function's own scope. It won't find and it goes one level up and will look for 'a' in the parent function. Then it will find that a is 12.//