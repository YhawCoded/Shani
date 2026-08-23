const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {
  beginBtn.innerHTML = "Loading something special... ✦";
  beginBtn.disabled = true;

  setTimeout(() => {
    alert("Okay Shani... you made it this far 👀");
  }, 900);
});
