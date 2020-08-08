---
title: このサイトのcodeblockがフラッシュバックしているのを治そうとした
description: input description
date: 2020-08-08 16:01:54
---

<a href="/今日追加した機能">この前、</a>サイトのbackground-colorがフラッシュバックするのが嫌で直した。

それは治ったが、コードブロックも一瞬明るくなって眩しいことに気づいた。

嫌だったので修正しようと思って、<a href="https://templates.netlify.com/template/eleventy-starter-boilerplate/">ボイラープレート</a>の中身を調べた。

そしたら、prism.jsでコードブロックの色を整えているようだった。

が、よく調べると、prism.jsで使用しているcssのみ使っているようだった。なので、cssを動的にすればできなくはなさそうだったが、そこまでしたくなかったので。一旦このままとした