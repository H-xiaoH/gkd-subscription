import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.tailg.run.intelligence',
  name: '台铃智能',
  groups: [
    splashAd([
      { matches: '[vid="tv_jump"]' },
      { matches: '[text*="跳过"][clickable=true]' },
    ]),
  ],
});
