const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("play-button");
const start = document.getElementById("start");
const end = document.getElementById("end");
const progressBar = document.getElementById("progress-bar");
const seekBar = document.getElementById("seek-bar");
const songName = document.getElementById("song-name");
const songAuthor = document.getElementById("song-author");
var counter = 0;
let isPlaying = false;
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
    fileUrl: "https://freepd.com/music/Fresh%20Focus.mp3",
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Jacinto Design",
    fileUrl: "https://freepd.com/music/Natural%20Vibes.mp3",
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
    fileUrl: "https://freepd.com/music/And%20Just%20Like%20That.mp3",
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Jacinto Design",
    fileUrl: "https://freepd.com/music/Funshine.mp3",
    imgUrl: "https://picsum.photos/seed/picsum/200/300",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  loadSongs();
  audioPlayer.addEventListener("timeupdate", () => {
    var { duration, currentTime } = displayCurrentTime();
    seek(duration, currentTime);
  });
  audioPlayer.addEventListener("canplaythrough", () => {
    displayCurrentTime();
  });
  audioPlayer.addEventListener("seeked", () => {});
  seekBar.addEventListener("click", (event) => {
    var totalLength = seekBar.offsetWidth;
    console.log(audioPlayer.currentTime);
    console.log(`Event clicked at ${(event.offsetX / totalLength) * 100}`);
    var percentage = (event.offsetX / totalLength) * 100;
    jumpToTime(percentage);
  });
});

function play() {
  audioPlayer.play();
}

function pause() {
  audioPlayer.pause();
}

function changeIcon(isPlaying) {
  if (isPlaying || isPlaying === null) {
    playButton.classList.replace("fa-play", "fa-pause");
  } else {
    playButton.classList.replace("fa-pause", "fa-play");
  }
}

function displayCurrentTime() {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;

  const durationInMinute = `${(duration / 60).toLocaleString()[0]}:${String(
    (duration % 60).toFixed(0)
  ).padStart(2, "0")}`;

  const currentTimeInMinute = `${
    (currentTime / 60).toLocaleString()[0]
  }:${String((currentTime % 60).toFixed(0)).padStart(2, "0")}`;
  // console.log(`Duration ${duration} Current time: ${currentTime}`);
  // console.log(
  //   `Duration : ${durationInMinute} Current time: ${currentTimeInMinute}`
  // );

  start.innerHTML = currentTimeInMinute;
  end.innerHTML = durationInMinute;
  return { duration, currentTime };
}
function jumpToTime(percentage) {
  audioPlayer.currentTime = audioPlayer.duration * (percentage / 100);
}

function seek(duration, currentTime) {
  var percentage = (currentTime / duration) * 100;
  progressBar.style.width = `${percentage}%`;
}

function togglePlayPause() {
  isPlaying = !isPlaying;
  changeIcon(isPlaying);
  if (isPlaying) {
    play();
  } else {
    pause();
  }
}

function progressBarUpdate() {
  console.log(audioPlayer);
}
function loadSongs() {
  songName.innerHTML = songs[0].displayName;
  songAuthor.innerHTML = songs[0].artist;
  audioPlayer.src = songs[0].fileUrl;
}
function nextSong() {
  counter += 1;
  songName.innerHTML = songs[counter % songs.length].displayName;
  songAuthor.innerHTML = songs[counter % songs.length].artist;
  audioPlayer.src = songs[counter % songs.length].fileUrl;
  audioPlayer.currentTime = 0;
  pause();
  changeIcon(false);
}
function previousSong() {
  counter -= 1;
  if (counter < 0) {
    counter = songs.length + counter;
  }
  songName.innerHTML = songs[counter % songs.length].displayName;
  songAuthor.innerHTML = songs[counter % songs.length].artist;
  audioPlayer.src = songs[counter % songs.length].fileUrl;
  audioPlayer.currentTime = 0;
  pause();
  changeIcon(false);
}
