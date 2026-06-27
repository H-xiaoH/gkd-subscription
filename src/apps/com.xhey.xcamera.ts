import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.xhey.xcamera',
  name: '今日水印相机',
  groups: [splashAd([{ matches: '[vid="ms_skipView"]' }])],
});
