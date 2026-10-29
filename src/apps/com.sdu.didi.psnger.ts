import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴',
  groups: [
    splashAd([
      // 8.0.16：跳过键无 text/desc，只有 vid；快照 activityId 为 null，故不写 activityIds
      { matches: '[vid="com.sdu.didi.psnger:id/skip_ad_ll"]' },
    ]),
  ],
});
