const opening = document.getElementById("opening");
const reveal = document.getElementById("reveal");

const beginBtn = document.getElementById("beginBtn");
const continueBtn = document.getElementById("continueBtn");


beginBtn.addEventListener("click", () => {

  beginBtn.disabled = true;

  opening.classList.add("fade-out");

  setTimeout(() => {

    opening.classList.add("hidden");

    reveal.classList.remove("hidden");
    reveal.classList.add("fade-in");

  }, 800);

});


continueBtn.addEventListener("click", () => {

  continueBtn.disabled = true;

  reveal.classList.add("fade-out");

  setTimeout(() => {

    // Next section coming soon 👀

    reveal.classList.add("hidden");

    alert("There's more... 👀");

  }, 800);

});
