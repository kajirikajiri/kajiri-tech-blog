---
title: Recoilとは
description: Recoilとはglobal stateの管理ライブラリでした。useStateのような書き方です
date: 2020-12-31T21:57:23.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/27 23:54:44 4128652</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [導入](#%E5%B0%8E%E5%85%A5)
- [結論](#%E7%B5%90%E8%AB%96)
- [書き方](#%E6%9B%B8%E3%81%8D%E6%96%B9)
- [サンプル](#%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB)
- [おまけ](#%E3%81%8A%E3%81%BE%E3%81%91)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## 導入
前回[parcelがなんなのか？](https://kajirikajiri.netlify.app/20201227211305/)気になって調べましたが今度はRecoilが気になったので調べました。

## 結論
global stateの管理ライブラリでした。

## 書き方

まずは使用するglobal stateを定義します。

```javascript
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
```
次に使う場所で呼び出します

```javascript
  const [text, setText] = useRecoilState(textState);
```

たったこれだけ。便利

## サンプル

定義箇所
https://github.com/GeoffCox/recoil-examples/blob/master/atoms-tutorial/src/atoms.ts

使用箇所
https://github.com/GeoffCox/recoil-examples/blob/70ddbfef9cd5d9fb2698f9c490d6c7c735d219c8/atoms-tutorial/src/components/ToDoItemCreator.tsx#L8


## おまけ
型の指定もuseStateみたいで親しみがある!
ちょいちょいきになることがあるんで調べてめもっていきます


