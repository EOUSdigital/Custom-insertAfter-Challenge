"use strict";

// 🟦 Module 7 - DOM Manipulation: Lesson 12. Custom insertAfter() Challenge

//* Goal
//  You will build your own insertAfter(referenceEl, newEl) helper that inserts a new node after an existing node within the same parent—using the DOM method parent.insertBefore(...).


//TODO  Step-by-step: How “insert after” works in the DOM

//? Step 1 — Identify the reference element
//  You start with an element that is already in the DOM (example: the first <li> in #section3 .tasks).

const referenceEl = document.querySelector("#section3 .tasks .task");


//? Step 2 — Identify the parent that owns the children
//  The parent is the container that holds the reference element as a direct child.

const parent = referenceEl.parentElement;

//! If "parent" is null, the reference element is not attached (or has no element parent).


//? Step 3 — Find the “next sibling”
//  To insert "after" an element, you insert "before the element that comes next".

const next = referenceEl.nextSibling;

//! Important:
//  • "nextSibling" can be "null" if "referenceEl" is the last child.
//  • "nextSibling" can also be a text node (whitespace), not only an element. That is fine—DOM insertion works with any node.


//? Step 4 — Insert before that next sibling
//  This is the core trick:

parent.insertBefore(newEl, next);

//! Why this works:
//  • If next exists → newEl becomes the node right before it (i.e., right after referenceEl).
//  • If next is null → insertBefore(newEl, null) behaves like appendChild(newEl) (it goes to the end).


//? Step 5 — Verify the DOM result
//  You should see the new element appear immediately after the reference element in the page.


//TODO  The Challenge

//? Test snippet:

const ref = document.querySelector("#section3 .tasks .task"); // Task 1
const x = document.createElement("li");
x.className = "task";
x.textContent = "Inserted after Task 1";

insertAfter(ref, x);

//? Now test in the console:

typeof window.insertAfter

//  You should get "function".

//! Result:

// function

//TODO  Self-check questions

//  1. Why does insertBefore(newEl, referenceEl.nextSibling) insert after referenceEl?
//  Answer:

//  2. What happens when referenceEl.nextSibling is null?
//  Answer:

//  3. Why might nextSibling be a text node, and why is that still okay?
//  Answer: 





















