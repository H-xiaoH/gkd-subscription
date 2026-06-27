import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    splashAd([
      { matches: '[vid="ad_skip_tv"]' },
      { matches: '[vid="ms_skipView"]' },
    ]),
  ],
});
