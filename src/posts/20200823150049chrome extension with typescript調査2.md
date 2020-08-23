---
title: chrome extension with typescript調査2
description: input description
date: 2020-08-08 21:38:38
---
<a href="chrome%20extension%20with%20typescript調査">調査一回目はこっち</a>

今日はwebextension-polyfillを調査した
[https://github.com/mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
callbackで組み立てる必要があるchrome-extensionをasync, await に対応してくれる

```javascript
chrome.hoge(function(tab){})
↓
const tab = chrome.hoge()
```

mozillaが作っているようだ。

非常に良さそうだったので試してみたら普通に動いた。

問題として、テスト用のmockを探したが<a href="https://github.com/acvetkov/sinon-chrome">前回見つかったもの</a>しかなかった

前回見つかったものはcallbackを想定して作られているのでムリだと思った

自分で書くという選択肢もあったが時間がかかりそうと判断した

