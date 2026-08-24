const opening = document.getElementById("opening");
const reveal = document.getElementById("reveal");
const story = document.getElementById("story");
const profile = document.getElementById("profile");
const appreciation =
  document.getElementById("appreciation");

const beginBtn = document.getElementById("beginBtn");
const continueBtn = document.getElementById("continueBtn");
const storyBtn = document.getElementById("storyBtn");
const profileBtn = document.getElementById("profileBtn");
const appreciationBtn =
  document.getElementById("appreciationBtn");


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

  switchScreen(story, profile);

});

profileBtn.addEventListener("click", () => {

  profileBtn.disabled = true;

  switchScreen(profile, appreciation);

});

appreciationBtn.addEventListener("click", () => {

  appreciationBtn.disabled = true;

  // Birthday finale coming next 🎂

});
