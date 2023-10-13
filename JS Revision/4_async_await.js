"use strict";

// FETCH : to get the data from a browser
// Here we have to decide, how much long we have to wait and know that the API has returned something
/*
It first fetched the data from the API, 
then it has converted the data into JSON
and after that it is logged into the console

In react more of this is used to save the state and then processed further
 */

// The below , can also be handled in a better way or cleaner way by using async and await
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// The above code is written in a efficient manner
// await works only in the async function
async function getTodos() {
  // await is to stopping or pausing the code, it tells to wait until is finished
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getTodos();
console.log(todos); // Here it returns the promise, the result value of async function is always a promise
console.log("gowrav");
