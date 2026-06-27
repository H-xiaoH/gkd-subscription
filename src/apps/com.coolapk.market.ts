import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    splashAd([
      {
        matches:
          '[vid="ad_container"] [name="android.view.View"][clickable=true]',
      },
    ]),
  ],
});
