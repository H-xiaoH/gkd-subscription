import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [splashAd([{ matches: '[vid="jump"]' }])],
});
