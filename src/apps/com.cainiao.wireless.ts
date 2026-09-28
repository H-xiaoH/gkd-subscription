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
      // AdsActivity 的跳过键是无 vid 的 TextView（text「跳过 3」倒计时），上面几条都匹配不到
      { matches: '[text*="跳过"][clickable=true]' },
    ]),
  ],
});
