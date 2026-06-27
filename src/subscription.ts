import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';

export default defineGkdSubscription({
  id: 233,
  name: 'HxiaoH\'s GKD Subscription',
  version: 0,
  author: 'HxiaoH',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/H-xiaoH/gkd-subscription',
  categories: [{ key: 0, name: '开屏广告' }],
  globalGroups: [],
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
