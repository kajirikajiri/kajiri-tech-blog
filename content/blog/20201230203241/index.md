---
title: 'Gatsbyで環境変数（process.env）が見えない、使えない、{}が返ってくる'
description: Gatsbyで環境変数をprocess.envで確認できなかったときのはなし
date: 2020-12-30T20:46:46.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [環境変数が見えない](#%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%8C%E8%A6%8B%E3%81%88%E3%81%AA%E3%81%84)
- [結論](#%E7%B5%90%E8%AB%96)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# 環境変数が見えない

はじまりは `console.log(process.env)` でした。まず、`console.log(process.env)` を仕込んでから環境変数を.envに書き込んでいきました。
しかし、どの環境変数を設定しても{}が返ってきます。何かがおかしいと思い、ググったところ、こんな記事が

https://stackoverflow.com/a/53745249

> console.log(process.env) will always print empty object

どうやら、Gatsbyは process.envを見ようとしても、{}を返し、process.env.ENVと個別に指定した場合には値を返してくれるようです。
今回自分もこれで解決しました。同じようにハマる人がへりますように

# 結論
process.envは{}。設定に失敗しているとは限らない
process.env.ENV_NAMEのように、使用したい環境変数を指定しよう

