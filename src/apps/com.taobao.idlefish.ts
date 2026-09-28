import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    splashAd([
      { matches: '[vid="splash_ad_close"]' },
      { matches: '[text*="跳过广告"]' },
    ]),
  ],
});
