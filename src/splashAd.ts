import type { RawAppGroup, RawAppRule } from '@gkd-kit/api';

// ponytail: 封装开屏广告固定配置，其他规则组类型出现时添加对应工厂
export const splashAd = (rules: RawAppRule[]): RawAppGroup => ({
  key: 0,
  name: '开屏广告',
  fastQuery: true,
  actionMaximum: 1,
  matchTime: 10000,
  resetMatch: 'app',
  rules,
});
