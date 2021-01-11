---
title: 頭の中にインデックスがあるのは大事だと思った経験
description: Promise.raceを使ったことはなかったが、挙動は知っていて要件を満たすことができたことがありました
date: 2021-01-11T23:35:58.000Z
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

JavaScriptでHtmlElemntを取得するときに、複数を非同期で探して先に見つかったElemntに対して処理を実行したいという要件があり、「あ、これPromise.raceでいけるな」と思い、やってみたら要件通りの動きをしてよかったよかったという話でした。
Promiseとか初見だと意味がわからない系のやつで、Promise.allとかnew Promiseは使えるようにしておいて、Promise.raceについてはそういうものがあるくらいの認識だったが役に立ってよかった。また、Promise.raceをみたら、Promise.allの逆の動きをするものがあるらしいという情報を得たのでこれも記憶されました。
細かい挙動は実際に動かしてみないと自分はわかりませんが、引き出しは増やしておきたい

