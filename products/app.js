const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("there was an error");
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    productsDOM.innerHTML = '<p class="error">there was an error...</p>';
  }
};

fetchProducts();
