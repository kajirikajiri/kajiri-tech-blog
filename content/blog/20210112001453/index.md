---
title: reactのdata-test属性は思った挙動をしなかった(e2eテスト)
description: >-
  data-test="foo
  bar"に対してquerySelectorをした場合、[data-test=foo][data-test=bar]を期待しますがちがいます
date: 2021-01-12T00:20:46.000Z
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

jest-puppeteerでテストをしていたときにdata-testに複数の属性をセットしたいことがあり下記のように書いた

```javascript
data-test="foo bar"
```

この場合document.querySelectorを使用して見つける場合はこうなると思っていた

```javascript
document.querySelector('[data-test=foo][data-test=bar]')
```

しかし、実際にはこれでみつかった

```javascript
document.querySelector('[data-test=foo bar]')
```

15分くらいはつまった、思い込みはよくない。
ちなみに上記の場合、別のelementにdata-test属性を設置して解決した。

