// const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
// console.log(Vimeo);
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let theme = localStorage.getItem(LOCALSTORAGE_KEY);

iframePlayer.on('timeupdate', function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
});

iframePlayer
  .setCurrentTime(theme)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
