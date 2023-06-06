
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCAL_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate(event) {
  const time = event.seconds;
  localStorage.setItem(LOCAL_KEY, time);
}

const savedTime = localStorage.getItem(LOCAL_KEY) || 0;

  console.log(savedTime);
  player.setCurrentTime(savedTime);
