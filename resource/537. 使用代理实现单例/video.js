import { singleton } from './singleton.js';

class MyVideo {
  constructor() {
    console.log('new MyVideo');
  }
}

const MyVideoSingleton = singleton(MyVideo);

export default new MyVideoSingleton();
