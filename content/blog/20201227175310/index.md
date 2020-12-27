---
title: 無名関数(即時関数)は返り値を返すのか
description: 無名関数は返り値を返すのか気になったので調べました
date: 2020-12-27T18:08:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [codesandbox](#codesandbox)
- [結果](#%E7%B5%90%E6%9E%9C)
- [過程](#%E9%81%8E%E7%A8%8B)
- [おまけ](#%E3%81%8A%E3%81%BE%E3%81%91)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# codesandbox
<iframe src="https://codesandbox.io/embed/anonymous-function-ojz23?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="anonymous function"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

# 結果
返す！！

# 過程
関数を生成して、それを即呼び出している

ここが関数

```javascript
(()=>{
  return 'hoge'
})
```

最後に()を付けて呼び出し

# おまけ

引数も取れるよ

```javascript
((c)=>{
  return c
})('hoge')
```

