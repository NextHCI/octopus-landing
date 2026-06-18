# Octopus 八爪鱼宣传页

这是一个独立的 Octopus 八爪鱼宣传下载页，所有页面文件、图片资源、脚本和构建产物都放在 `octopusapp-landing` 文件夹内。

## 内容

- `src/index.html`: 页面结构与营销文案
- `src/styles.css`: 响应式视觉样式、动效和可访问性处理
- `src/script.js`: 滚动 reveal
- `src/assets/`: 页面使用的品牌与生成图片资源
- `scripts/build.mjs`: 无依赖静态构建脚本
- `scripts/serve.mjs`: 本地预览服务器
- `dist/`: 执行构建后生成的可部署静态文件

## 下载链接

页面中的下载入口分为桌面版和移动端。桌面版提供 Windows、macOS 两个按钮，指向项目发布页:

https://github.com/NextHCI/octopus-releases/releases/latest

移动端提供 iOS 和 Android 两个入口:

- iOS 入口指向 TestFlight 内测链接: https://testflight.apple.com/join/ac1f6Xks
- Android 入口指向 `http://ring.shiweinan.com:32850/api/v1/update/redirect`，由服务端重定向到最新 APK 下载地址。

## 使用

```bash
npm install
npm run build
npm run start
```

启动后访问:

```text
http://127.0.0.1:4175
```

如果只需要部署静态页面，将 `dist` 目录发布到任意静态托管服务即可。

## GitHub Pages

本项目已包含 GitHub Actions workflow，push 到 `main` 后会构建 `dist`，并发布到 `gh-pages` 分支。

如果仓库是 `NextHCI/octopus-landing`，默认 Pages 地址是:

```text
https://nexthci.github.io/octopus-landing/
```

如果想用更短的域名，建议绑定:

```text
https://octopus.shiweinan.com/
```

## 视觉资源

页面使用了三张项目内生成图片:

- `src/assets/hero-octopusapp.png`
- `src/assets/workflow-octopusapp.png`
- `src/assets/hwm-world-model.png`

生成方式: Codex 内置 image generation tool。原始生成图保留在本机 Codex generated images 目录，项目引用的最终版本已复制进本文件夹。
