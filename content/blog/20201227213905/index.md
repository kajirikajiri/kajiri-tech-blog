---
title: gatsbyのnavigateをmockしたかった(snapshotテスト)
description: snapshotテストの時gatsby.navigateがmockできなくて困ったので共有します
date: 2020-12-27T21:49:18.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [これでmockできる](#%E3%81%93%E3%82%8C%E3%81%A7mock%E3%81%A7%E3%81%8D%E3%82%8B)
- [自分の場合](#%E8%87%AA%E5%88%86%E3%81%AE%E5%A0%B4%E5%90%88)
- [stackoverflow](#stackoverflow)
- [おまけ](#%E3%81%8A%E3%81%BE%E3%81%91)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# これでmockできる

```javascript
const gatsby = jest.requireActual('gatsby')
gatsby.navigate = jest.fn()
```

# 自分の場合
snapshotでgatsby.navigateを呼び出す必要がなかったのでただmockできればよかったのでこの方法でmockしました
stackoverflowに書いてた方法とは少し違いますがやってることは一緒だと思います
また、この書き方でgatsbyのmockができるなら他のmoduleもmockできそうだなと思ったので詰まったときは試そうと思います

# stackoverflow
https://stackoverflow.com/a/62649602

# おまけ
gatsbyはpagesに入れればルーティングしてくれるのがすき

