const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "JvIoAkzLNkmoHSROFHNI9T96zUfsL_RduCccnmX8zgA";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Element for Links & Photos, add to DOM
const displayPhotos = () => {
  photosArray.forEach((photo) => {
    console.log(photo);
    // Create <a> to link to Unsplash
    // const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    // Create <img> for photo
    // const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    // Put <img> inside <a>, then put both inside imageContainer Element
    // item.appendChild(img);
    // imageContainer.appendChild(item);
    const el = `
        <a href=${photo.links.html} target="_blank">
            <img 
                src=${photo.urls.regular} 
                alt=${photo.alt_description} 
                title=${photo.alt_description}
            />
        </a>`;
    imageContainer.insertAdjacentHTML("beforeend", el);
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

getPhotos();
