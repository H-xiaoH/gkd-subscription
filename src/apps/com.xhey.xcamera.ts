import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.xhey.xcamera',
  name: '今日水印相机',
  groups: [
    splashAd([
      { matches: '[vid="atvSkip"][text*="跳过"]' },
      { matches: '[text*="跳过"][clickable=true]' },
      // 3.0.465 起：跳过按钮本体与文字都无 vid/无 text，锚点改用父容器 adContainer
      {
        matches:
          '[vid="com.xhey.xcamera:id/adContainer"] [name="android.view.View"][clickable=true]',
      },
      {
        matches:
          '[vid="com.xhey.xcamera:id/adContainer"] [name="android.widget.TextView"][clickable=true]',
      },
    ]),
  ],
});
