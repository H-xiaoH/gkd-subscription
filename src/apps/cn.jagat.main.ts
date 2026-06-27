import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'cn.jagat.main',
  name: 'Jagat果汁儿',
  groups: [
    splashAd([
      { matches: '[vid="openAppAdView"] [text*="跳过"]' },
      { matches: '[vid="openAppAdView"] [vid="tobid_splash_skip_ll"]' },
    ]),
  ],
});
