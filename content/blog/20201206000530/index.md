---
title: denoにPRだした（続き
description: 先週denoにPRだしたけどどうなったかなー
date: 2020-12-06T00:14:49.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->



<!-- tocstop -->

</div></details>

<!-- toc area end -->

[前回](https://kajirikajiri.netlify.app/20201129213351/)は[deno](https://github.com/denoland/deno)にPRをだしたところで時間が来て終了したが、マージはされませんでした！残念

どうやら

- exportされていない関数にはコメント不要
- 関数名が明示的だった場合にはコメント不要

でした。（[指摘コメント](https://github.com/denoland/deno/pull/8542#issuecomment-736550332)）

あと、[コントリビューター用のmarkdown](https://github.com/denoland/deno/blob/master/docs/contributing/style_guide.md#use-jsdoc-for-exported-symbols)に書いてました

マージされるとこまではいかなかったけど、いい経験になりました

