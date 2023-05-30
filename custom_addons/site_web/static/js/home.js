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



/* On scroll to <<Expert in field>> section start the animation */

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  var speed = 1;
  let incrementNumber = Math.ceil(endNbr / 100)
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {//Delay a bit before calling the function again.
      incNbrRec(i + incrementNumber, endNbr, elt);
    }, speed);
  }else{
    setTimeout(function () {//Delay a bit before calling the function again.
      incNbrRec(endNbr, endNbr, elt);
    }, speed);
  }
}

let reachSectionResearchersAndLabs = false
let reachSectionUniversitiesAndCountries = false

document.addEventListener('scroll', function () {
  var top = window.pageYOffset + window.innerHeight,
    isVisibleResearchersAndLabs = top > document.querySelector('.researchers-counter').offsetTop;
  isVisibleUniversitiesAndCountries = top > document.querySelector('.universities-counter').offsetTop;

  if (isVisibleResearchersAndLabs) {
    if (!reachSectionResearchersAndLabs) {
      reachSectionResearchersAndLabs = true
      incEltNbr("researchers-animation");
      incEltNbr("expert-lab-animation");
    }
  }
  if (isVisibleUniversitiesAndCountries) {
    if (!reachSectionUniversitiesAndCountries) {
      reachSectionUniversitiesAndCountries = true
      incEltNbr("expert-universitites-animation");
      incEltNbr("expert-countries-animation");
    }

  }
});