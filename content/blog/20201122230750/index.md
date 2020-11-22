---
title: testcafeで見えているelementを対象にテストしたい時
description: 'testcafeでinvisibleな要素(display none, visibility hidden)以外を対象にする方法を共有します'
date: 2020-11-22T23:17:01.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/22 23:14:52 22228f3</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [❌invisibleな要素を含む](#%E2%9D%8Cinvisible%E3%81%AA%E8%A6%81%E7%B4%A0%E3%82%92%E5%90%AB%E3%82%80)
- [⭕️visibleな要素のみ](#%E2%AD%95%EF%B8%8Fvisible%E3%81%AA%E8%A6%81%E7%B4%A0%E3%81%AE%E3%81%BF)
- [reference](#reference)
- [解説](#%E8%A7%A3%E8%AA%AC)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# ❌invisibleな要素を含む

```javascript
Selector()
```

# ⭕️visibleな要素のみ

```javascript
Selector().filterVisible()
```

# reference

[testcafe](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/filtervisible.html)

# 解説

[testcafe](https://devexpress.github.io/testcafe/documentation/reference/test-api/selector/filtervisible.html)
> The elements that do not have display: none or visibility: hidden CSS properties and have non-zero width and height are considered visible.

日本語にすると

display: noneまたはvisibility: hiddenのCSSプロパティを持たず、widthとheightが0ではない要素はvisibleとみなされます。

となるので、以下のいずれかを含む場合はSelector.filterVisible()では検出されないということになります。

- display: none;
- visibility: hidden;
- width: 0;
- height: 0;


