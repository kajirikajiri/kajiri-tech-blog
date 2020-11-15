---
title: reactでborderBottomを内側にだけ有効にしたい.md
description: description
date: 2020-09-06 20:18:12
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/09/01 11:31:11 f8e3ef5</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [結論](#%E7%B5%90%E8%AB%96)
- [まとめ](#%E3%81%BE%E3%81%A8%E3%82%81)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# 結論

```css
.borderBottom {
	box-sizing: 'border-box';
	border-bottom: '5px solid #2460D1';
	border-top: '5px solid transparent';
}
```

# まとめ
これで内側だけborder-bottomを表示できた。

隣の要素と高さがずれたりもしないのでよい。

[[react]][[style]][[borderBottom]]
