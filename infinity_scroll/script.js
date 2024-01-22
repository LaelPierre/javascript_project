const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

// Create Element for Links & Photos, add to DOM
const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);

    // Event Listener, check when each is finished loading
    img.addEventListener("load", imageLoaded);

    //   const el = `
    //       <a href=${photo.links.html} target="_blank">
    //           <img
    //               src=${photo.urls.regular}
    //               alt=${photo.alt_description}
    //               title=${photo.alt_description}
    //           />
    //       </a>`;
    //   imageContainer.insertAdjacentHTML("beforeend", el);
  });
};

// Get Photos from Unsplash API
const getPhotos = async () => {
  try {
    const resp = await fetch(apiUrl);
    photosArray = await resp.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
};

// Check to see if scrolling near bottom of page, then load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
