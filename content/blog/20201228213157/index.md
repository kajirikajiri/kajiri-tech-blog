---
title: JavaScriptの関数の書き方に別の種類があった
description: ReactのuseEffectを見ていたら使ったことがない関数の書き方をしていたので共有します
date: 2020-12-28T21:54:23.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/28 21:46:03 c9378c1</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [codesandbox](#codesandbox)
- [コードサンプル](#%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB)
- [みつけた](#%E3%81%BF%E3%81%A4%E3%81%91%E3%81%9F)
- [おまけ](#%E3%81%8A%E3%81%BE%E3%81%91)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# codesandbox

<iframe src="https://codesandbox.io/embed/loving-river-x26e8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="return function"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

# コードサンプル

```javascript
const outer = (a) => {
  return (b) => {
    return `${a}${b}`
  }
}
```

# みつけた
reactの副作用フックを見ていて、`return () => {`という構文をみつけて、この書き方は普段使ってないなと思い挙動を確認してみた。
https://ja.reactjs.org/docs/hooks-overview.html#effect-hook

# おまけ
JavaScriptは表現豊かですばらしいなー（こんなコードはプログラミング始めた頃に見せられても絶対理解できない!!と思った）
よく考えればmapで使ってるなと思った

```javascript
const a = b => b
[1,2].map(a)
```

