---
title: wasmを勉強する2
description: 前回に続きwasmを勉強したので共有します
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

- [github](#github)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

[前回](https://kajirikajiri.netlify.app/20201229033548)の続き

今回は[これ](https://rustwasm.github.io/book/game-of-life/setup.html)です。

[ここ](https://rustwasm.github.io/book/game-of-life/hello-world.html#whats-inside)まできた。何が入っているか。このexternとpubがいまいちわかってないけど、多分、importとexportなんだろう

```rust

#![allow(unused_variables)]
fn main() {
extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-game-of-life!");
}

}
```

[ここ](https://rustwasm.github.io/book/game-of-life/hello-world.html#build-the-project)まできた。

あれ、説明と違うぞ

```bash
# 解説
pkg/
├── package.json
├── README.md
├── wasm_game_of_life_bg.wasm
├── wasm_game_of_life.d.ts
└── wasm_game_of_life.js
```


```bash
# 実際
pkg/
├── package.json
├── README.md
├── wasm_game_of_life.d.ts
├── wasm_game_of_life.js
├── wasm_game_of_life_bg.js
├── wasm_game_of_life_bg.wasm
└── wasm_game_of_life_bg.wasm.d.ts
```

バージョン変わったん？

そういえば[前回](https://kajirikajiri.netlify.app/20201229033548)はbg.jsがなくてうまく動かなかったな。今回は自動で生成された。なんか違うんか？

で、npm run startしたら、[前回](https://kajirikajiri.netlify.app/20201229033548)と同じ用にアラートが表示された。

[exercises](https://rustwasm.github.io/book/game-of-life/hello-world.html#exercises)まできた。

え、greet関数を変更しろって？知らないよ。さっき同じようなの見たからできるけど。 [link](https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm)

```rust
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

うーん、まーexternがimport、pubがexportなんだろうけど、しっくりこない。ちょっと調べるか。

[pub](https://doc.rust-jp.rs/book/second-edition/ch07-02-controlling-visibility-with-pub.html#a%E9%96%A2%E6%95%B0%E3%82%92%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%99%E3%82%8B)

> コンパイラに何かを公開すると指示するには、定義の先頭にpubキーワードを追記します。

[extern](https://doc.rust-lang.org/std/keyword.extern.html)

> (訳)このexternキーワードは、Rustの2か所で使用されています。1つはcrate キーワードと組み合わせて、Rustコードにプロジェクト内の他のRustクレートを認識させるためのものextern crate lazy_static;です。他の用途は、外部関数インターフェース（FFI）です。

[extern関数を使用して外部コードを呼び出す](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#using-extern-functions-to-call-external-code)

> (訳)時々、あなたのRustコードが他の言語で書かれたコードと相互作用する必要があるかもしれません。このために、Rustには外部関数インターフェース（FFI）の作成と使用を容易にするキーワードexternがあります。FFI はプログラミング言語が関数を定義し、別の (外国の) プログラミング言語がそれらの関数を呼び出すことを可能にする方法です。

externで別の言語から呼び出しを可能にする。Cの部分はC言語のinterfaceに従う。C言語のきまりに従う感じかな？

もっといいのあった

[wasm-bindgen](https://github.com/rustwasm/wasm-bindgen#example)

```rust
use wasm_bindgen::prelude::*;

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

予想通りだった。externでimport。

しかし、Cの部分はよくわかんないな。JSとかになるんじゃないのか？JavaScriptエンジンはC++で[link](https://ja.wikipedia.org/wiki/V8_(JavaScript%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3)#:~:text=V8%E3%81%AF%E3%80%81Google%E3%81%8C%E9%96%8B%E7%99%BA,%E3%81%A7%E6%8E%A1%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82)書かれてる。（spider monkey)とかは別かな？。

まあ、いいや。で、pubがexportしてると。

fnは[関数定義](https://doc.rust-jp.rs/book/second-edition/ch03-03-how-functions-work.html#a%E9%96%A2%E6%95%B0)。

extern "C"でalertをimport。pub fn greetの内部でalertを使う。alertはJavaScriptのalert。引数には、、なんだこれ、&format!って。rubyっぽいな

[doc.rust-js.rs](https://doc.rust-jp.rs/rust-by-example-ja/hello/print.html#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%81%97%E3%81%A6%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88)

> format!: フォーマットされたテキストを文字列(String)型に書き込みます。

[doc.rust-lang.org](https://doc.rust-lang.org/std/macro.format.html)

```rust
format!("test");
format!("hello {}", "world!");
format!("x = {}, y = {y}", 10, y = 30);
```

引数を順番に{}に取り込むようだ。

&はポインタ？

[stackoverflow](https://stackoverflow.com/questions/31908636/what-does-the-ampersand-mean-in-a-rust-type)

[所有権](https://doc.rust-jp.rs/book/second-edition/ch04-01-what-is-ownership.html)

所有権は読むと面白い。

[所有権 参照と借用](https://doc.rust-jp.rs/book/second-edition/ch04-02-references-and-borrowing.html)

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    // '{}'の長さは、{}です
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

> まず、変数宣言と関数の戻り値にあったタプルコードは全てなくなったことに気付いてください。 2番目に、&s1をcalcuate_lengthに渡し、その定義では、String型ではなく、&Stringを受け取っていることに注目してください。
> これらのアンド記号が参照であり、これのおかげで所有権をもらうことなく値を参照することができるのです。 図4-5はその図解です。

いろいろしらべたけど、&format!はわからん。まあいいや。

&で所有権を移さず、参照を使う。&xって感じで値が返ってくることはわかったから、関数もたぶん、値が返ってくるんだろう。

とりあえずさっきのgreetに引数渡せるようになった。ok。

## github
[link](https://github.com/kajirikajiri/rust-js-wasm-2)


