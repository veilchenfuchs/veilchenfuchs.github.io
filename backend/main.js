async function loadPosts() {
  try {
    const res = await fetch("./posts/posts.json");
    const posts = await res.json();

    const container = document.querySelector(".posts");

    posts.forEach(post => {
      const article = document.createElement("div");
      article.classList.add("post");

      article.innerHTML = `
        <h2 class="post-title"><a href="${post.url}">${post.title}</a></h2>
        <p class="post-info"><strong>${post.date}</strong> – ${post.byline} – ${post.source}</p>
        <p class="post-desc">${post.description}</p>
      `;

      container.appendChild(article);
    });
  } catch (err) {
    console.error("Failed to load posts:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadPosts);
