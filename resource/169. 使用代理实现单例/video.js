import { singleton } from './singleton.js';

class Video {
  constructor() {
    // some code here
    console.log('video created');
  }
}
const newVideo = singleton(Video);
export { newVideo as Video };
