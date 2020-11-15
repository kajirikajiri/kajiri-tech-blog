---
title: bashで空白を含むファイルに対応する
description: input description
date: 2020-07-19 17:33:28
---

# たいおうするには
下記を先頭で定義する

```
IFS='
'
```

[https://ja.stackoverflow.com/a/18000](https://ja.stackoverflow.com/a/18000)


> なお、bash や zsh であれば $'\n' といった記法が使用できます。

こう書いてあったので試してみたが自分の環境ではだめでした。空白が認識された。

# 環境
wsl2
Ubuntu 20.04