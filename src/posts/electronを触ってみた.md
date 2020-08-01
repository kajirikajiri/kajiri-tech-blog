---
title: electronを触ってみた
description: input description
date: 2020-07-24 16:22:30
---

### とりあえず表示できたやつ
![](/assets/images/posts/electron_app.png)

### 使ったもの
https://www.electronjs.org/docs/tutorial/first-app
上記を頼りに動作させることができた

### 環境
ver
Microsoft Windows [Version 10.0.19041.388]

### はまりどころ
#### npm がないと言われる
![](/assets/images/posts/npm_not_found.png)
チェックボックスをONにしたらnpm -vで確認できるようになった
あと、powershellを再起動した

#### electronという名前のアプリケーションの中にelectronはnpm installできないと言われる
![](/assets/images/posts/electron_already_installed.png)
エラーメッセージから判明した。directory nameをelectronにして、npm initしたらpackage.jsonのアプリ名がelectornになっていて、electornをnpm installしようとしたらできないと言われた。なのでpackage.jsonのnameをelectron以外にしたら大丈夫だった
