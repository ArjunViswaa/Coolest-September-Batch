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

// Promise.allSettled

Promise.allSettled([fetchUserData(), fetchUserPosts()]).then((results) => {
    results.forEach((result) => {
        console.log(result);
    });
})
.catch((error) => {
    console.log(error);
});