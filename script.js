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
const finale = document.getElementById("finale");
const wishBtn = document.getElementById("wishBtn");
const birthdayStars =
  document.getElementById("birthdayStars");


function switchScreen(current, next) {

  current.classList.add("hidden");
  next.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

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

  switchScreen(appreciation, finale);

  createStars();

});

function createStars() {

  for (let i = 0; i < 45; i++) {

    const star = document.createElement("span");

    star.className = "star";
    star.textContent = "✦";

    star.style.left =
      Math.random() * 100 + "%";

    star.style.top =
      Math.random() * 100 + "%";

    star.style.animationDelay =
      Math.random() * 2 + "s";

    star.style.fontSize =
      (Math.random() * 7 + 5) + "px";

    birthdayStars.appendChild(star);

  }

  }
wishBtn.addEventListener("click", () => {

  wishBtn.innerHTML = "Wish sent ✦";

  wishBtn.disabled = true;

  createConfetti();

});

function createConfetti() {

  const pieces = 80;

  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("span");

    piece.textContent =
      Math.random() > 0.5 ? "✦" : "♡";

    piece.style.position = "fixed";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.top = "-20px";

    piece.style.fontSize =
      (Math.random() * 10 + 8) + "px";

    piece.style.zIndex = "10";

    piece.style.animation =
      `confettiFall ${
        Math.random() * 2 + 2
      }s linear forwards`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);

  }

                         }
