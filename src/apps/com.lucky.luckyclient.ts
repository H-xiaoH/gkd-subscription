import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [splashAd([{ matches: '[vid="tv_skip_text"]' }])],
});
