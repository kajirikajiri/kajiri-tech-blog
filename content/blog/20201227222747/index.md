---
title: gatsbyとtailwindcssでclassNameが再レンダリングされない
description: gatsbyとtailwindcssでclassNameが再レンダリングされなくて結果tag名の重複をさけた
date: 2020-12-27T22:36:38.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [状況](#%E7%8A%B6%E6%B3%81)
- [なぜか](#%E3%81%AA%E3%81%9C%E3%81%8B)
- [結果](#%E7%B5%90%E6%9E%9C)
- [おまけ](#%E3%81%8A%E3%81%BE%E3%81%91)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# 状況

```javascript
import React from 'react';

...

const Index = () => {
  ...

  if (loading) {
    return (
      <div className="mb-20 mt-10">
        ...loading
      </div>
    )
  }
  return (
    <div>
      ...
    </div>
  )
}
export default Index

```

こんなかんじでコンポーネントを書いて、loadingが終了した時にclassNameのmb-20 mt-10が引き継がれていた。

# なぜか
わかりませんでしたー

ただ、react公式をみるに、classNameの変更は検知してくれる

https://ja.reactjs.org/docs/reconciliation.html#dom-elements-of-the-same-type

で結局、divタグみたいな挙動をしてくれればよかったので、利用頻度の低そうなmainタグで代用しました

# 結果

```javascript
import React from 'react';

...

const Index = () => {
  ...

  if (loading) {
    return (
      <main className="mb-20 mt-10">
        ...loading
      </main>
    )
  }
  return (
    <div>
      ...
    </div>
  )
}
export default Index

```

# おまけ
たぶんreact, gatsby, tailwindcssあたりを見れば解決出来るんだろうけど、そこまでやる時間がありませんでした。とりあえずの解決策として上記が機能しました。

また、stackoverflowをみると、keyを書いて一意にすればいけるぜ！って書いてたんだけど今回は機能しませんでした。不思議

https://stackoverflow.com/questions/60339095/reactjs-re-render-is-not-applied-on-css/60339265#60339265

