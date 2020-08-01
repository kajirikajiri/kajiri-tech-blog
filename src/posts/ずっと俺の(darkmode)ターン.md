---
title: ずっと俺の(darkmode)ターン
description: dark modeで画面切り替え時に一瞬画面がフラッシュする現象をなんとかする
date: 2020-08-01 23:02:16
---

### 試した環境
バージョン: 84.0.4147.105（Official Build） （64 ビット）

### 結論
bodyタグの最初にscriptタグを置いてdarkmodeを判定する

### なんで必要なのか
darkmode-js(https://darkmodejs.learn.uno/)を使用していたが、画面が切り替わるときに一瞬フラッシュバックして、目が痛くなった。
これは嫌なので、なんとかする方法を探した。

### 方法

```html
<body>
  <script>
    var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    var darkmode = localStorage.getItem('darkmode')
    if (!darkmode && supportDarkMode) {
      document.body.style.background = '#000'
    }
    if (darkmode) {
      document.body.style.background = '#000'
    }
  </script>
  <%- content %>
</body>
```

darkmode-jsはlocal storageを利用しているので、そこから現在のmodeを取得する
browserがdarkmodeかどうか取得する
あとはそれぞれいい感じにする
これでフラッシュする現象が直る

### ありがとうありがとう
https://blog.maximeheckel.com/posts/switching-off-the-lights-part-2-fixing-dark-mode-flashing-on-servered-rendered-website