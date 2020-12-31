---
title: ReactHooksのuseStateのソースコードを読んだらflowのことを思い出せず詰まった
description: Reactのソースコードを読んでいたらJavaScriptファイルなのにGeneric関数がでてきて、flowのことを思い出すのに時間がかかった話です
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/23 16:53:20 1711320</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [今回読んだやつ](#%E4%BB%8A%E5%9B%9E%E8%AA%AD%E3%82%93%E3%81%A0%E3%82%84%E3%81%A4)
- [今回読んだReactHooksのソースコード](#%E4%BB%8A%E5%9B%9E%E8%AA%AD%E3%82%93%E3%81%A0reacthooks%E3%81%AE%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## 今回読んだやつ

```javascript
export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```

これなんと、jsファイルなんです。tsじゃないんですよ。vscodeにコピペしても

```bash
Type parameter declarations can only be used in TypeScript files.ts(8004)
```

tsファイルじゃないとだめだよって怒られるし、困りました。JavaScript Generic とかで調べても自分でGeneric実装した話とかでてくるし、そういうことじゃないって思いながら調べてたら、flowがでてきて、あ、、、って感じで思い出しました。

[flow](https://flow.org/)はfacebookが作ったJavaScriptの静的型チェッカーです。
typescriptはMicrosoftです。
stackoverflowで質問の数を比較すると、[typescirptは100,000以上](https://stackoverflow.com/questions/tagged/typescript)ですが、[flowは1000未満](https://stackoverflow.com/questions/tagged/flow)となっていて、人気はTypeScriptが上のようです。

## 今回読んだReactHooksのソースコード
https://github.com/facebook/react/blob/e6a0f276307fcb2f1c5bc41d630c5e4c9e95a037/packages/react/src/ReactHooks.js#L80


