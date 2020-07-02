/* Stacks */

// functions: push, pop, length, peek

const letters = []; // stack, js arrays contain all the funcs of a stack

const word = "wassamassaw";

let rword = "";

// put letters of word into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
