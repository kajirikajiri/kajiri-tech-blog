# react-tutorialにcircle-ci, typescript, e2e, jest, lintを詰め込んだ

## 青果物

[reference](https://github.com/kajirikajiri/react-typescript-jest-lint-e2e-ci)

## circle-ci

### ci puppeteer

#### localhostが立ち上がらない(running localhost on circle-ci)

```bash
net::ERR_NAME_NOT_RESOLVED at http://localhost:3000
      at navigate (node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:113:23)
      at FrameManager.navigateFrame (node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:88:21)
      at Frame.goto (node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:405:16)
      at Page.goto (node_modules/puppeteer/lib/cjs/puppeteer/common/Page.js:826:16)
```

localhostを立ち上げた状態でjestでpuppeteerを実行しようとしたところで詰まった。

##### 解決策

foreverを使う

```yaml
      - run:
          name: install forever global
          command: sudo npm i forever -g
      - save_modules
      - run: forever start -c "yarn start" ./
```

[reference](https://github.com/kajirikajiri/react-typescript-jest-lint-e2e-ci/blob/95c69ea89fc28e08480a45f4ac04f61e62b4d788/.circleci/config.yml#L51)

調べたところ、メモリに常駐することによって、起動した状態を維持できる。デーモン化できる。というもの

下記qiitaでnpm startをforeverしていることに気づいて、それを参考にしたら成功した

[reference](https://qiita.com/stranger1989/items/93320cb6b3a8999baa82)

あと、localhostだとつながないこともあるそうなので、127.0.0.1がいいかもしれない

ivp4,ipv6の関係でうまく行かないことがあるって書いてた

### ci jest

これについては問題なかった

localで動いていれば、ciでもそのまま動いた

## typescript

これも問題なかった

create-react-appするときに引数を渡すだけ

```bash
npx create-react-app react-ts-app --typescript
```

## e2e

### puppeteer

最初、puppeteerのみでe2eをしようとして詰まった

jestとpuppeteerを組み合わせて使うべき

そうすれば、便利なテスト関数が使える

それがないと、console.logでエラーを出力するとかいうよくわからないことになる(なった)

[reference](https://jestjs.io/docs/ja/puppeteer)

jest-puppeteerというのもあるし、puppeteerをれんけいさせることもできる（やり方が特殊。jest-puppeteerが内部でやっていることを自分で設定する感じぽい）

[jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)

## jest

普通に動いた

## formatter lint

- style lint
- prettier
- eslint

を使用した