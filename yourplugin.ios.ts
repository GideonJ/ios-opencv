import {Common} from './yourplugin.common';

declare var CvVideoCamera;

export class YourPlugin extends Common {
  
  constructor() {
    super();
    setTimeout(() => {
      console.log(CvVideoCamera);
    }, 1000);
  }
}