import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [splashAd([{ matches: '[vid="tv_skip"]' }])],
});
