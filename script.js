/* ================================= */
/* ELEMENTS                          */
/* ================================= */

const opening =
  document.getElementById("opening");

const reveal =
  document.getElementById("reveal");

const story =
  document.getElementById("story");

const profile =
  document.getElementById("profile");

const appreciation =
  document.getElementById("appreciation");

const finale =
  document.getElementById("finale");


const beginBtn =
  document.getElementById("beginBtn");

const continueBtn =
  document.getElementById("continueBtn");

const storyBtn =
  document.getElementById("storyBtn");

const profileBtn =
  document.getElementById("profileBtn");

const appreciationBtn =
  document.getElementById("appreciationBtn");

const wishBtn =
  document.getElementById("wishBtn");


const birthdayStars =
  document.getElementById("birthdayStars");

function switchScreen(current, next) {

  const duration = 850;

  /*
    Prepare the next screen.
  */

  next.classList.remove("hidden");

  next.classList.remove("transition-ready");
  next.classList.add("transition-in");


  /*
    Force the browser to register the
    starting position before animating.
  */

  void next.offsetWidth;


  /*
    Start current screen leaving.
  */

  current.classList.add("transition-out");


  /*
    Bring the next screen in.
  */

  requestAnimationFrame(() => {

    next.classList.remove("transition-in");
    next.classList.add("transition-ready");

  });


  /*
    Once the animation is finished,
    completely remove the old screen.
  */

  setTimeout(() => {

    current.classList.add("hidden");

    current.classList.remove("transition-out");

    next.classList.remove("transition-ready");

    window.scrollTo(0, 0);

  }, duration);

}


/* ================================= */
/* OPENING → REVEAL                  */
/* ================================= */

beginBtn.addEventListener("click", () => {

  if (beginBtn.disabled) return;

  beginBtn.disabled = true;

  switchScreen(
    opening,
    reveal
  );

});


/* ================================= */
/* REVEAL → STORY                    */
/* ================================= */

continueBtn.addEventListener("click", () => {

  if (continueBtn.disabled) return;

  continueBtn.disabled = true;

  switchScreen(
    reveal,
    story
  );

});


/* ================================= */
/* STORY → PROFILE                   */
/* ================================= */

storyBtn.addEventListener("click", () => {

  if (storyBtn.disabled) return;

  storyBtn.disabled = true;

  switchScreen(
    story,
    profile
  );

});


/* ================================= */
/* PROFILE → APPRECIATION             */
/* ================================= */

profileBtn.addEventListener("click", () => {

  if (profileBtn.disabled) return;

  profileBtn.disabled = true;

  switchScreen(
    profile,
    appreciation
  );

});


/* ================================= */
/* APPRECIATION → FINALE             */
/* ================================= */

appreciationBtn.addEventListener("click", () => {

  if (appreciationBtn.disabled) return;

  appreciationBtn.disabled = true;

  switchScreen(
    appreciation,
    finale
  );

  createStars();

});


/* ================================= */
/* CREATE BIRTHDAY STARS             */
/* ================================= */

function createStars() {

  /*
    Prevent duplicate stars if the function
    ever gets called more than once.
  */

  birthdayStars.innerHTML = "";


  for (let i = 0; i < 45; i++) {

    const star =
      document.createElement("span");


    star.className = "star";

    star.textContent = "✦";


    star.style.left =
      Math.random() * 100 + "%";


    star.style.top =
      Math.random() * 100 + "%";


    star.style.animationDelay =
      Math.random() * 2 + "s";


    star.style.fontSize =
      Math.random() * 7 + 5 + "px";


    birthdayStars.appendChild(star);

  }

}


/* ================================= */
/* WISH BUTTON                       */
/* ================================= */

wishBtn.addEventListener("click", () => {

  if (wishBtn.disabled) return;

  wishBtn.innerHTML =
    "Wish sent ✦";

  wishBtn.disabled = true;

  createConfetti();

});


/* ================================= */
/* CONFETTI                          */
/* ================================= */

function createConfetti() {

  const pieces = 80;


  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("span");


    piece.textContent =
      Math.random() > 0.5
        ? "✦"
        : "♡";


    piece.style.position =
      "fixed";


    piece.style.left =
      Math.random() * 100 + "vw";


    piece.style.top =
      "-20px";


    piece.style.fontSize =
      Math.random() * 10 + 8 + "px";


    piece.style.zIndex =
      "100";


    piece.style.pointerEvents =
      "none";


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
