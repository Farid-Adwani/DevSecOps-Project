// Play video
const myVideo = document.getElementById("video");
function playPause() {
  myVideo.play();
}
// Hide button play after on video start
const media = document.querySelector(".media");
const btnPlay = document.getElementById("btn-play");
media.addEventListener("click", () => {
  btnPlay.style.display = "none";
});
//Display video controls on hover
const videoControls = document.getElementById("video");
video.addEventListener(
  "click",
  function () {
    videoControls.controls = true;
  },
  false
);
