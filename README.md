# 15 分鐘 electron 初體驗

Electron 可以讓你使用純 JavaScript 使用豐富的原生 APIs 來創造桌面應用。你可以把它看作是用於 Desktop App 的 Node.js 的一個變體。這並不代表 Electron 是有自己 GUI 元件的 JavaScript。Electron 使用 Web 技術作為它的 GUI 的實作，所以你能把它看作成一個被 JavaScript 控制的精簡版的 Chromium 瀏覽器。

也就意味著，以往在開發 Desktop 時可能需要使用 Java、.Net 或是 Objective-C 相關技術來進行，有了 Electron 讓 Desktop App 的開發也能用熟悉的 Web 相關技術來進行，甚至 React, Angular 的前端框架也可以被引入 Electron 進行使用。

## 快速上手 - 檢測系統資訊

透過快速上手來了解 Electron 跟一般 Web 開發有什麼不同。

### 存取系統資訊

首先網頁應用通常是不能取用系統資訊的，基於安全性的考量，但 Electron 作為 Desktop App 表示其擁有更多存取權，首先透過下列指令來啟動第一個練習：

```bash
npm install && npm start
```

啟動畫面如下：

![](assets/README-daf7a.png)

經由使用 Node.js 內建 [os](https://nodejs.org/api/os.html) module，可以存取系統網路、CPU、記憶體相關資訊。

### 練習：列出檔案系統

不管任何 OS 我們都可以透過 `ls` 來取得檔案系統


## package 不同 OS 之 執行檔

```
npm run build
```


npm install -g electron-prebuilt@1.1.1

electron file-explorer/
