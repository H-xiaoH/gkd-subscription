import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.mxbc.mxsa',
  name: '蜜雪冰城',
  groups: [
    splashAd([
      // 3.3.63 SplashActivity：跳过键 text「跳过」但 clickable=false，整页无可点节点
      { matches: '[vid="com.mxbc.mxsa:id/count_down"]' },
      { matches: '[text="跳过"]' },
    ]),
  ],
});
