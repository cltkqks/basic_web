// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     console.log(myJson);
//   });

// var fetched = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("fetched", fetched);
// fetched.then(function (response) {
//   console.log("response", response);
// });
// fetched.catch(function (reason) {
//   console.log("reason", reason);
// });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .catch((reason) => {
    console.log("reason", reason);
  })
  .then((data) => {
    console.log("data", data);
  });
