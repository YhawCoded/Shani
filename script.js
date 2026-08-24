const opening = document.getElementById("opening");
const reveal = document.getElementById("reveal");
const story = document.getElementById("story");

const beginBtn = document.getElementById("beginBtn");
const continueBtn = document.getElementById("continueBtn");
const storyBtn = document.getElementById("storyBtn");


function switchScreen(current, next) {

  current.classList.add("fade-out");

  setTimeout(() => {

    current.classList.add("hidden");

    next.classList.remove("hidden");
    next.classList.add("fade-in");

  }, 800);

}


beginBtn.addEventListener("click", () => {

  beginBtn.disabled = true;

  switchScreen(opening, reveal);

});


continueBtn.addEventListener("click", () => {

  continueBtn.disabled = true;

  switchScreen(reveal, story);

});


storyBtn.addEventListener("click", () => {

  storyBtn.disabled = true;

  alert("Okay... now let's talk about you. 👀");

});
