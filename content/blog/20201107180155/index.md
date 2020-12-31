---
title: vuejsでコメントを記述する他の方法
description: vuejsのtemplateタグの内側でコメントアウトする方法がもう一つあったので共有します
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/21 20:52:30 01341b9</li>
<li>2020/11/15 18:00:54 1588cc2</li>
<li>2020/11/15 13:59:03 490d2a0</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [注意事項](#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85)
- [codesandbox](#codesandbox)
- [例](#%E4%BE%8B)

<!-- tocstop -->

</div></details>

<!-- toc area end -->
## 注意事項
vue3だとcompileエラー出ました。

## codesandbox

<iframe src="https://codesandbox.io/embed/vuejs-other-comment-5cjtu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vuejs other comment"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 例

```html
<template>
  <div>
    <!-- コメントです -->
    {{ /* コメントです */ }}
  </div>
</template>
```

{{ /* コメント */ }}こっちは見たことなかった。


