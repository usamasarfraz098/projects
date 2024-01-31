const musicContainer = document.querySelector(".music-container");
const audio = document.querySelector("#audio");
const playbtn = document.querySelector("#play");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
const cover = document.querySelector("#cover");
const title = document.querySelector("#title");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector("#progress-container");
const favIcon = playbtn.querySelector("i.fas");
const songs = ["hey", "summer", "ukulele"];
let songIndex = 2;

const loadSong = function (song) {
  title.innerHTML = song;
  audio.src = `music/music-player_music_${song}.mp3`;
  cover.src = `images/${song}.jpg`;
};
loadSong(songs[songIndex]);
const playSong = function () {
  musicContainer.classList.add("play");
  favIcon.classList.add("fa-pause");
  favIcon.classList.remove("fa-play");
  audio.play();
  console.log("play");
  //   if (favIcon.classList.contains("fa-pause")) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }
};
const pauseSong = function () {
  musicContainer.classList.remove("play");
  favIcon.classList.remove("fa-pause");
  favIcon.classList.add("fa-play");
  audio.pause();
};

playbtn.addEventListener("click", function () {
  const isPlaying = musicContainer.classList.contains("play");
  console.log(isPlaying);
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }

  console.log("usama");
});

prevbtn.addEventListener("click", function () {
  //   console.log("next");
  songIndex = songIndex - 1;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  audio.play();
  console.log(songIndex);
});
nextbtn.addEventListener("click", function () {
  songIndex = songIndex + 1;
  if (songIndex > 2) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  audio.play();
});

// update audio progress bar
const updateProgress = function (e) {
  //   console.log(e);
  //   console.log(e.srcElement.currentTime);

  currentSongTime = e.srcElement.currentTime;
  progressBar.style.width = `${currentSongTime}%`;
};

// set audio progress time bar
// function setProgress(e) {
//   const width = this.clientWidth;
//   console.log(width);
//   const clickX = e.offsetX;
//   const duration = audio.duration;
//   console.log(e);
//   audio.currentTime = (clickX / width) * duration;
// }
function setProgress(e) {
  console.log(e, this);
  // const width = this.clientWidth;
  const clickX = e.offsetX;
  // const duration = audio.duration - 11;
  audio.currentTime = clickX;
  // / width) * duration;
  //   console.log(duration, width, clickX);
}
audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", function () {
  songIndex = songIndex + 1;
  if (songIndex > 2) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  audio.play();
});
