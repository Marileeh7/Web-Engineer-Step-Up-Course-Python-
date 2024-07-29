let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function fetchData() {
  return fetch('ajax.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jsonData => {
      data = jsonData;
      if (data.length === 0) {
        throw new Error('No data found in the JSON');
      }
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

function changeVideo() {
  if (data.length === 0) {
    fetchData().then(() => updateVideo());
  } else {
    updateVideo();
  }
}

function updateVideo() {
  if (data.length > 0) {
    const videoData = data[number];
    titleArea.innerHTML = videoData.title;
    contentArea.innerHTML = videoData.content;
    videoArea.setAttribute("src", videoData.url);
    number = (number + 1) % data.length;
  } else {
    console.error('No video data available to display');
  }
}

button.addEventListener('click', changeVideo);
window.onload = changeVideo;
