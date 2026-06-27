# GKD 订阅

个人 GKD 订阅配置，用于自动跳过开屏广告。

## 支持应用

| 应用 | 规则 |
| - |:-:|
| 哔哩哔哩 | 开屏广告 |
| 菜鸟 | 开屏广告 |
| 广发银行 | 开屏广告 |
| Jagat果汁儿 | 开屏广告 |
| 今日水印相机 | 开屏广告 |
| 酷安 | 开屏广告 |
| 麦当劳 | 开屏广告 |
| 瑞幸咖啡 | 开屏广告 |
| 萤石云视频 | 开屏广告 |
| 云闪付 | 开屏广告 |
| 中国电信 | 开屏广告 |

## 订阅地址

```txt
https://raw.githubusercontent.com/H-xiaoH/gkd-subscription/main/dist/gkd.json5
```

镜像加速：

```txt
https://fastly.jsdelivr.net/gh/H-xiaoH/gkd-subscription@main/dist/gkd.json5
```

## 开发

```shell
pnpm install
pnpm run check   # 类型检查
pnpm run build   # 构建订阅
```

## 添加应用规则

在 `src/apps/` 下创建以包名命名的文件：

```ts
import { defineGkdApp } from '@gkd-kit/define';
import { splashAd } from '../splashAd';

export default defineGkdApp({
  id: 'com.example.app',
  name: '示例应用',
  groups: [splashAd([{ matches: '[vid="skip"]' }])],
});
```
