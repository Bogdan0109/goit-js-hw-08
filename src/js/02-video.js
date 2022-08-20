const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let theme = localStorage.getItem(LOCALSTORAGE_KEY);

iframePlayer.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000)
);

iframePlayer.setCurrentTime(theme);
