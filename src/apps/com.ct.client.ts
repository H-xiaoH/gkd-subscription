import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [splashAd([{ matches: '[vid="btSkip"]' }])],
});
