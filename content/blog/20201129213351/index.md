---
title: denoにPR出そうとして苦戦した
description: denoにPRだそうとしたら難しい部分が多くて苦戦したことをまとめました
date: 2020-11-29T23:49:10.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [きっかけ](#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91)
- [対象の関数](#%E5%AF%BE%E8%B1%A1%E3%81%AE%E9%96%A2%E6%95%B0)
  * [buildMessage](#buildmessage)
  * [isKeyedCollection](#iskeyedcollection)
- [エラー出た](#%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%BA%E3%81%9F)
- [pr](#pr)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# きっかけ
https://note.com/maguro_tuna/n/n5e5b56479abe

deno_lintにコントリビュートしている人がいて、やってみるかという気持ちがわいてきた

# 対象の関数
## buildMessage
https://github.com/denoland/deno/blob/097babb6fbe313cdb1d749d510e9f8eb57ba899f/std/testing/asserts.ts#L69

```javascript
function buildMessage(diffResult: ReadonlyArray<DiffResult<string>>): string[] {
  const messages: string[] = [];
  messages.push("");
  messages.push("");
  messages.push(
    `    ${gray(bold("[Diff]"))} ${red(bold("Actual"))} / ${
      green(bold("Expected"))
    }`,
  );
  messages.push("");
  messages.push("");
  diffResult.forEach((result: DiffResult<string>): void => {
    const c = createColor(result.type);
    messages.push(c(`${createSign(result.type)}${result.value}`));
  });
  messages.push("");

  return messages;
}
```

まず、buildMessageだが、Denoのテストを実行して失敗した時に表示するメッセージをきれいに整えて出力するものだった。(ActualとExpectedのDiffを赤と緑の太文字で表示する)
それ自体はすぐわかったのだが、コメントにどう書けばいいか迷ってDeepLにたよりつつなんとかできた。

## isKeyedCollection
https://github.com/denoland/deno/blob/097babb6fbe313cdb1d749d510e9f8eb57ba899f/std/testing/asserts.ts#L89

```javascript
function isKeyedCollection(x: unknown): x is Set<unknown> {
  return [Symbol.iterator, "size"].every((k) => k in (x as Set<unknown>));
}
```

こっちは関数名がそのまんま示してくれていたからコメントとしてはすぐきまった。

やっていることとしては`Set<unknown>`でxをSetオブジェクト型だとアサーションして、それがSymbol.itelator(オブジェクトのデフォルトのイテレーター）とsizeを持っているか調べていた。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections

new Map([['a', 1]]) とかをisKeyedCollectionの引数に渡してやるとtrueがかえって来る

[試した](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJUUyS4sFQFHgXiEAGlIHhINwAMIK9yj8ecFWrfKgLjxIYSTh6rdg0TEPMAHh3e84AD5QABvRQlJwEs2gADaxDwiBB0AC8h++KSvwApyAAXpAAoALoBJAehkHgKoqvEep8reiQZKAG5iMIp6oBeCRXteep6gA3IoAC+lITvKirKiq06zvOS7QCuY4TiqnCJqAACyDAECqb5vtGDDRvwACMkH8EJ0iiaAABMknvtGsCyQAzJBkHEQasrUQqkBKvAqqcRIPF8SqeoBC6qAqmJxE6dSekGaqqbSAAVpAo4BPEs6CCqd4MPkYm8NI+RyeRdlyo5dHGaZ-GCcJskSVJ0YyfwCnJSp-DqZpARgZAepAA)

しかし、typescriptの表現が色々でてきた。
- unknown
- is
- as

これらについては調べて理解したのでいつかまとめたい

# エラー出た
記事を書きながら余裕な感じでGithub Actionsのciが終わるのを待ってたら落ちた。どうなるこれ
。。ってかきながら、来週かなと思ってたら速攻で返事きてた。
なるほど、最新じゃないと。。クローンしたの6時間くらい前だから、バージョンアップしたか？
てことでクローン元からpullしてみたら、、、へんこうありました。ありがとう [@bartlomieju](https://github.com/bartlomieju)
[Deno Land](https://github.com/denoland)のメンバーでした。返答早すぎる
ci通るかなー...
とおったー。prだした。今日はおしまい

# pr
https://github.com/denoland/deno/pull/8542

