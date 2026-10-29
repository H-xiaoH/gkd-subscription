import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.niu.cloud',
  name: '小牛电动',
  groups: [
    splashAd([
      // 5.19.0 WelComeActivity：跳过键是带倒计时的 TextView（「2 跳过」），vid 稳定
      { matches: '[vid="com.niu.cloud:id/skipAdsBtn"]' },
    ]),
  ],
});
