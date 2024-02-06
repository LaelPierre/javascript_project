const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

// Prompt to select a media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // Catch error here
    console.log("whoops, error here:", error);
  }
};

buttonElement.addEventListener("click", async () => {
  // disable button
  buttonElement.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  buttonElement.disabled = false;
});
// On load
selectMediaStream();
