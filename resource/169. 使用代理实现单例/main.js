import { Video } from './video.js';

const v1 = new Video();
const v2 = new Video();
console.log(v1 === v2);
Video.prototype.play = function () {
  console.log('play');
};
v1.play();
