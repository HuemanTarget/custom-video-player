const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video
const toggleVideoStatus = () => {
  return true;
};

//Update Play Pause Icon
const updatePlayIcon = () => {
  return true;
};

// Update Progress & Timestamp

const updateProgress = () => {
  return true;
};

// Set Video Time To Progress
const setVideoProgress = () => {
  return true
}

// Stop Video
const stopVideo = () => {
  return true;
}

// Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
