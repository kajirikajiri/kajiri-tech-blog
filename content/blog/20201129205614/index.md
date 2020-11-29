---
title: denoにprした
description: denoにgood first issueがあったのでprを出してみました
date: 2020-11-29T21:33:15.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [denoにあったissue](#deno%E3%81%AB%E3%81%82%E3%81%A3%E3%81%9Fissue)
- [失敗](#%E5%A4%B1%E6%95%97)
  * [denoland/denoをcloneしてprをだした](#denolanddeno%E3%82%92clone%E3%81%97%E3%81%A6pr%E3%82%92%E3%81%A0%E3%81%97%E3%81%9F)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# denoにあったissue
https://github.com/denoland/deno/issues/7487
このissueに取り組んでJSDocを追加したのはよかったが、よく見ると一つ前のprの人が追加したファイルだった。だが、JSDocがない関数があったので、それに追加した。
だがしかし、[ガイド](https://github.com/denoland/deno/blob/master/docs/contributing/style_guide.md#use-jsdoc-for-exported-symbols)をみると、exportするsymbolはJSDocを書きましょうとあるが、exportしないものは特に指定がなかった。なので必要なかったかもなと思いながらPRをだした。github actionのciが不要かもしれないかつ、コメントを追加しただけのprに全力でがんばっていて申し訳なかった

# 失敗
## denoland/denoをcloneしてprをだした
これは成功しない。denolandから権限貰えばできるが、権限がない。
なので、forkするのが正解だった。forkしてからdenoland/denoにprをだす。kajirikajiri/denoに出さない。

どうなるかなー

