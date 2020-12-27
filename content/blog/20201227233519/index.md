---
title: use-query-paramsにtypoを見つけたのでPRだした
description: お世話になっているライブラリにタイポを見つけたのでPRをだしました
date: 2020-12-27T23:44:57.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [PR](#pr)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

use-query-paramsにtypoを見つけたのでPRだした

README.md

before

```javascript
<QueryParamProvider reachHistory={globalHisory}><App /></QueryParamProvider>
```

after

```javascript
<QueryParamProvider reachHistory={globalHistory}><App /></QueryParamProvider>
```

めっちゃ分かりづらいですが、Hisory->Historyに修正しました
query parameterがreactのuseState風に使えて便利なライブラリです。
また、IE11もサポートできます。(query-stringのバージョンを5.1.1にする必要がある)

```
Note: There is a peer dependency on query-string. For IE11 support, use v5.1.1, otherwise use v6.

```

[前回のDenoへのPR](https://kajirikajiri.netlify.app/20201129205614/)は[マージされることはなかった](https://kajirikajiri.netlify.app/20201206000530/)ですが、[PRの出し方](https://kajirikajiri.netlify.app/20201129205614/)は覚えました。[前回はDenoのマスターをcloneしてそこにPRを出して失敗しましたが、今回はforkしてからPRだした](https://kajirikajiri.netlify.app/20201129205614/)ので10分くらいでPRだせた！満足

# PR
https://github.com/pbeshai/use-query-params/pull/139

