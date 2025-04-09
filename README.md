# Interview

Create a simple form with an input and a button.
The user types a number in the input and presses the button.
It must calculate a factorial and print the result to the screen.

## Some caviats:

- It must print the whole number, even if its really big.
- It must not freeze/crash the browser.

## Tests the following

1. Basic JS. Read a value from an input, or make the button clickable.
2. Solving a simple problem that was likely solved many times before - the factorial. The candidate he can use google to find out what a factorial is. The factorial itself is not the question.
3. How is it solved? Recursion? Does the candidate understand that it'll overflow? If not, see how the candidate debugs the error.
4. How does he solve an uncommon problem? The BigInt isn't a typical thing one does in frontend. It's not terribly hard to solve, and it gives good insight into whether the candidate can understand error messages, look for esoteric solution online, etc.
5. And finally, for the advanced part of the question: does the candidate understand the eventloop and how browsers work? How will he solve the browser locking up? If he just does some async-await, or a setTimeout - he doesn't. He needs to realize that the solution would be either service workers, or to do a generator function with yield return and setTimeout after X iterations in the loop.

## What is a factorial

A factorial is a mathematical function that multiplies a given positive integer n by all the positive integers less than it. In other words, the factorial of
n is the product of all positive integers from 1 to n

n! = n×(n−1)×(n−2)×…×1

**Example:**

5! = 5×4×3×2×1 = 120

3! = 3×2×1 = 6
