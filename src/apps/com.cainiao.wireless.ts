import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    splashAd([
      { matches: '[vid="ms_skipView"]' },
      { matches: '[vid="homesplash_close_fullscreen"]' },
      { matches: '[vid="fanti_ad_count_and_skip_container"]' },
      {
        matches:
          '[vid="fl_thrid_splash_container"] [name="android.view.View"][clickable=true]',
      },
    ]),
  ],
});
