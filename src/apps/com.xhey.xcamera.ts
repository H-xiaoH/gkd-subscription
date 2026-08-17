import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.xhey.xcamera',
  name: '今日水印相机',
  groups: [
    splashAd([
      { matches: '[vid="atvSkip"][text*="跳过"]' },
      { matches: '[text*="跳过"][clickable=true]' },
    ]),
  ],
});
