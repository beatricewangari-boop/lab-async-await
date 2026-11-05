// Write your code here!
const postList = document.getElementById("post-list");

function displayPosts(posts) {
    postList.innerHTML = "";

    posts.forEach((post) => {
        const li = document.createElement("li");
        
        const h1 = document.createElement("h1")
        h1.textContent = post.title;
        const p = document.createElement("p");
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

        postList.appendChild(li);
    
    });
}
async function fetchPosts() {
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();
        console.log("Posts received:", posts.length);    
            displayPosts(posts);
            console.log("Number of posts to display:", posts.length);
            console.log("First posts:", posts[0]);
    } catch (error) {
        console.error("Error fetching posts:", error);
   }
}
fetchPosts();
