function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
    });
  }
  
function fetchUserPosts() {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 500);
    });
}

// Handle with promises(chaining)

// fetchUserData().then((user) => {
//     console.log('user data -> ' + user);
//     return fetchUserPosts().then((posts) => {
//         console.log('user posts -> ' + posts);
//     })
// })
// .catch((error) => {
//     console.log('Error -> ' + error);
// });

// Promise combinators - (i) Promise.all
/* Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the iterable argument 
 have resolved or when the iterable argument contains no promises. */

Promise.all([fetchUserData(), fetchUserPosts()]).then((results) => {
    console.log('user data -> ' + results[0]);
    console.log('user posts -> ' + results[1]);
})
.catch((error) => {
    console.log('Error -> ' + error);
});