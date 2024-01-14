let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const resp = await fetch(apiUrl);
    apiQuotes = await resp.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

getQuotes();
