const url = "https://icanhazdadjoke.com/z";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDadJokes();
});

const fetchDadJokes = async () => {
  result.textContent = "Loading...";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error("there was an error");
    }

    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error...";
  }
};

fetchDadJokes();
