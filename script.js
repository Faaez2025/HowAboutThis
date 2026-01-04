function startMusic() {
  var music = document.getElementById("bg-music");
  if (music) {
    music.play();
    localStorage.setItem("musicPlaying", "yes");
  }
}

function resumeMusic() {
  if (localStorage.getItem("musicPlaying") === "yes") {
    var audio = document.createElement("audio");
    audio.src = "audio.mp3";
    audio.loop = true;
    audio.autoplay = true;
    audio.style.display = "none";
    document.body.appendChild(audio);
  }
}