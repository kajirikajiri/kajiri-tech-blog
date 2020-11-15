---
title: object in array with react typescript
description: input description
date: 2020-08-23 18:05:35
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [objectの型定義](#object%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->

# objectの型定義
[https://qiita.com/hida/items/fb0379353bbb71f8191b](https://qiita.com/hida/items/fb0379353bbb71f8191b)

> objectArray: {key: string}[];             // 配列内にオブジェクト

ふむふむ

```typescript
const hoge: {name: String}[] = [
  {
    name: ''
  }
]
```

リファクタしよう

```typescript
interface Tasks {
  name: String, description: String
}[]

const hoge: Tasks = [
  {
    name: ''
  }
]
```

エラーなのか。。。

[https://stackoverflow.com/a/25470775/10677105](https://stackoverflow.com/a/25470775/10677105)

なるほど

```typescript
interface Tasks {
  name: String, description: String
}

const hoge: Tasks[] = [
  {
    name: ''
  }
]
```

arrayのinterfaceは定義できないのか？
できそうだな

```typescript
interface Tasks {
  [index: number]: {
    name: String, description: String
  }
}

const hoge: Tasks[] = [
  {
    name: ''
  }
]
```

できたね。。。mapないって言われた。。。なぜ。自分で定義しないといけないのか。
もどした

そういえばさっき、index: numberをNumberって書いたらエラーでた。。。

[https://saku.io/difference-string-types-in-typescript/](https://saku.io/difference-string-types-in-typescript/)
> 結論は、 String はJavaScriptの文字列型であり、 string はTypeScriptの文字列型です。

なるほど、めんどうだな。
Numberも同じ感じかな？きっと

```javascript
Welcome to Node.js v14.3.0.
Type ".help" for more information.
> typeof []
'object'
```

なんとなく、この辺が関係している気がする
