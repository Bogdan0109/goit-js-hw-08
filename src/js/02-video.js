// const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
// console.log(Vimeo);
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

iframePlayer.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {
  data: {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
};

iframePlayer.on('play', onPlay);

iframePlayer.off('play', onPlay);

localStorage.setItem(LOCALSTORAGE_KEY, iframePlayer.getCurrentTime());
console.log(iframePlayer.getCurrentTime());

iframePlayer
  .setCurrentTime(
    iframePlayer
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
      })
      .catch(function (error) {
        // an error occurred
      })
  )
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

// console.log(
//   iframePlayer
//     .getDuration()
//     .then(value => {
//       duration = value;
//     })
//     .then(() => {
//       iframePlayer
//         .getCurrentTime()
//         .then(value => {
//           seconds = value;
//         })
//         .then(() => {
//           this.trackVideoAction('pause', {
//             duration,
//             seconds,
//           });
//         });
//     })
// );
