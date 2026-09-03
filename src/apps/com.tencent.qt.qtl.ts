import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    splashAd([
      { matches: '[text*="跳过"][clickable=true]' },
      { matches: '[desc*="跳过"][clickable=true]' },
    ]),
  ],
});
