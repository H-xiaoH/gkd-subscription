import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    splashAd([
      // 9.6.15：开屏广告挂在 MainActivity 上，跳过键 vid skipBtn，text「跳过 4」
      { matches: '[vid="com.netease.cloudmusic:id/skipBtn"]' },
    ]),
  ],
});
