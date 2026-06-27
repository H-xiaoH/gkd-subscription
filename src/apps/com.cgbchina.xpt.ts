import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.cgbchina.xpt',
  name: '广发银行',
  groups: [splashAd([{ matches: '[desc*="跳过"]' }])],
});
