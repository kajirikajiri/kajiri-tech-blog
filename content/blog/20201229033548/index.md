---
title: wasmを勉強する
description: wasmを勉強したので共有します
date: 2020-12-31T21:57:23.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/29 03:40:40 8628dd7</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [tutorialを探した](#tutorial%E3%82%92%E6%8E%A2%E3%81%97%E3%81%9F)
- [tutorialやってみた](#tutorial%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F)
- [github](#github)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

何を勉強しようか迷っていて、rust人気だよなーとか、自分の強みといえばJavaScriptだよなーとか考えて、色々探しているうちに、[この記事](https://qiita.com/tatsuya6501/items/f13582103a65aa24e5b9#web%E7%B3%BB%E3%81%9D%E3%81%AE2)を見つけた。

wasm。聞いたことはあった、JavaScriptよりも高速にwebで動かせたような、、、というくらいしかしらない。

で、[この記事](https://qiita.com/ShuntaShirai/items/3ac92412720789576f22#javascript%E3%81%A8%E3%81%AE%E9%96%A2%E4%BF%82)をみると、 **wasmはJavaScriptの代替ではなく、補完の目的** で作られたらしく、JavaScriptからwasmを呼び出せるらしい。これは興味がある。

## tutorialを探した

[tutorial1 MDN](https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm)

[tutorial2 rustwasm book](https://rustwasm.github.io/book/game-of-life/introduction.html)

[tutorial3 rustwasm docs](https://rustwasm.github.io/docs/wasm-bindgen/introduction.html)

## tutorialやってみた



まず[tutorial1 MDN](https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm)からということで、特に詰まることもなく、npm run serveまでいけた。で実行すると。エラー出たよ

```bash
npm run serve

> @ serve /home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site
✖ ｢wdm｣: Hash: 8221b0a2fb46322e4709
Version: webpack 4.44.2
Time: 709ms
Built at: 2020/10/04 14:06:17
                           Asset      Size  Chunks                         Chunk Names
                      0.index.js  1.87 KiB       0  [emitted]
72b6ec37725abeb03dfb.module.wasm  15.6 KiB       0  [emitted] [immutable]
                        index.js   370 KiB    main  [emitted]              main
Entrypoint main = index.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./index.js 40 bytes {main} [built]
[./index.js] 125 bytes {main} [built]
[./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js] 81 bytes {0} [built]
[./node_modules/@kajirikajiri/hello-wasm/hello_wasm_bg.wasm] 15.6 KiB {0} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/html-entities/lib/index.js] 449 bytes {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
    + 20 hidden modules

ERROR in ./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js
Module not found: Error: Can't resolve './hello_wasm_bg.js' in '/home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site/node_modules/@kajirikajiri/hello-wasm'

 @ ./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js 2:0-35 2:0-35
 @ ./index.js


  1 {
ERROR in ./node_modules/@kajirikajiri/hello-wasm/hello_wasm_bg.wasm
Module not found: Error: Can't resolve './hello_wasm_bg.js' in '/home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site/node_modules/@kajirikajiri/hello-wasm'
 @ ./node_modules/@kajirikajiri/hello-wasm/hello_wasm_bg.wasm
 @ ./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js
 @ ./index.js
ℹ ｢wdm｣: Failed to compile.
^C
npm run serve  2.91s user 0.44s system 0% cpu 9:40.98 total
```

え？hello_wasm_bg.jsがない。なるほど。さっきわたしが作ったやつですね。え、でもwasm-packが勝手にやってくれるって書いてたじゃん。

まあ、見てみるか。ということで ./node_modules/@kajirikajiri/hello-wasm/ みてみると、たしかにhello_wasm_bg.jsがない。ignoreしたか？と思ったけど .gitignoreはない。white-listか？と思ってみると、package.jsonのfilesにhello_wasm_bg.jsがない。wasm-packビルドで生成された、pkg内にはhello_wasm_bg.jsがある。で、.gitignoreには*と書いてある

```json
// package.json
{
  ...
  "files": [
    "hello_wasm_bg.wasm",
    "hello_wasm.js",
    "hello_wasm.d.ts"
  ],
  ...
}
```

```bash
# .gitignore
*
```

つまり、hello_wasm_bg.jsは含まれることはないです。[link](https://zellwk.com/blog/ignoring-files-from-npm-package/)

wasm-pack buildなんか手順間違ったかと思ったが、間違ってなさそう。

さすがにwasm-packの中身を見る気にならなかったので、wasm-pack buildで生成
された、package.jsonのfilesにhello_wasm_bg.jsを追加でnpm publish --access=public

で、npm iすると、今度はhello_wasm_bg.jsが入ってた。ということでnpm run serve

今度はちゃんと立ち上がり、alertが表示できた。満足

```bash
npm run serve

> @ serve /home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/kajiri/ghq/github.com/kajirikajiri/rust-js-wasm/site
ℹ ｢wdm｣: Hash: 73cb814ad4ac2bd3ff66
Version: webpack 4.44.2
Time: 794ms
Built at: 2020/10/04 14:26:45
                           Asset      Size  Chunks                         Chunk Names
                      0.index.js  7.29 KiB       0  [emitted]
bcff791f24d5270f0456.module.wasm  15.6 KiB       0  [emitted] [immutable]
                        index.js   370 KiB    main  [emitted]              main
Entrypoint main = index.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./index.js 40 bytes {main} [built]
[./index.js] 141 bytes {main} [built]
[./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js] 81 bytes {0} [built]
[./node_modules/@kajirikajiri/hello-wasm/hello_wasm_bg.js] 2.4 KiB {0} [built]
[./node_modules/@kajirikajiri/hello-wasm/hello_wasm_bg.wasm] 15.6 KiB {0} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
    + 22 hidden modules
ℹ ｢wdm｣: Compiled successfully.
```

## github
[link](https://github.com/kajirikajiri/rust-js-wasm)


