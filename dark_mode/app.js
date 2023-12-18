const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatData = moment(date).format("MMMM Do, YYYY");

    return `<section class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${formatData}</span>
        <span>${length} min read</span>
      </div>
      <p>${snippet}</p>
    </section>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;

console.log(moment);
