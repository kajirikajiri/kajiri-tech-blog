---
title: Cannot find name '__PATH_PREFIX__'
description: jsからtsに置き換えている時に発生したエラーを修正する方法です
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/21 20:52:55 ef79fa1</li>
<li>2020/11/21 20:48:37 d1ff8f1</li>
<li>2020/11/21 19:40:35 a1bd1a7</li>
<li>2020/11/15 20:37:47 92a34cc</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [エラーメッセージ](#%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8)
- [⭕ 解決](#%E2%AD%95-%E8%A7%A3%E6%B1%BA)
- [参考リンク](#%E5%8F%82%E8%80%83%E3%83%AA%E3%83%B3%E3%82%AF)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## エラーメッセージ

```bash
Cannot find name '__PATH_PREFIX__'.ts(2304)
```

## ⭕ 解決

```javascript
declare const __PATH_PREFIX__: string
```

エラーが発生している箇所より先に定義してください。

## 参考リンク
http://sagatto.com/20190821_put_typescript_to_vue_js
> ３．Cannot find nameめちゃでる。




