const songs = [
  {
    title: "taxi",
    file: "./music/taxi.mov",
    poster: "./music/taxi.png",
  },
  {
    title: "pinkw",
    file: "./music/pinkw.mov",
    poster: "./music/pinkw.jpeg",
  },
  {
    title: "starboi",
    file: "./music/starboi.mov",
    poster: "./music/starboi.jpeg",
  },
];
const audio = new Audio();
let currentSongIndex = 0;

const updateUI = () => {
  const currentSong = songs[currentSongIndex];
  document.querySelector(".background-image").src = currentSong.poster;
  document.querySelector(".music__poster").src = currentSong.poster;
};

const play = () => {
  audio.src = songs[currentSongIndex].file;
  audio.play();
  document.querySelector(".music__pause").textContent = "⏸️";
};

const pause = () => {
  audio.pause();
  document.querySelector(".music__pause").textContent = "▶️";
};

const playPauseToggle = () => {
  if (audio.paused) {
    play();
  } else {
    pause();
  }
};

const playNext = () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateUI();
  play();
};

const playPrev = () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateUI();
  play();
};

document
  .querySelector(".music__pause")
  .addEventListener("click", playPauseToggle);
document.querySelector(".music__next").addEventListener("click", playNext);
document.querySelector(".music__prev").addEventListener("click", playPrev);
