---
title: 20200823150049react-typescript.md
description: description
date: 2020-09-06 20:20:54
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [react-tutorial をtypescriptで始める](#react-tutorial-%E3%82%92typescript%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B)
- [AMD, UMD](#amd-umd)
- [circleci導入](#circleci%E5%B0%8E%E5%85%A5)
- [lint-staged 導入](#lint-staged-%E5%B0%8E%E5%85%A5)
  - [eslint](#eslint)
  - [prettier](#prettier)
  - [stylelint](#stylelint)
    - [Error内容](#error%E5%86%85%E5%AE%B9)
- [jest のdebug](#jest-%E3%81%AEdebug)
- [遭遇したError](#%E9%81%AD%E9%81%87%E3%81%97%E3%81%9Ferror)
  - [Error文言](#error%E6%96%87%E8%A8%80)
    - [直訳](#%E7%9B%B4%E8%A8%B3)
    - [解決](#%E8%A7%A3%E6%B1%BA)
  - [Error文言](#error%E6%96%87%E8%A8%80-1)
    - [解決](#%E8%A7%A3%E6%B1%BA-1)
  - [error文言](#error%E6%96%87%E8%A8%80)
    - [解決](#%E8%A7%A3%E6%B1%BA-2)
  - [error文言](#error%E6%96%87%E8%A8%80-1)
    - [直訳](#%E7%9B%B4%E8%A8%B3-1)
    - [解決](#%E8%A7%A3%E6%B1%BA-3)
  - [error文言](#error%E6%96%87%E8%A8%80-2)
    - [考察](#%E8%80%83%E5%AF%9F)
    - [transformを修正してみる](#transform%E3%82%92%E4%BF%AE%E6%AD%A3%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B)
      - [cssのimportがおかしい](#css%E3%81%AEimport%E3%81%8C%E3%81%8A%E3%81%8B%E3%81%97%E3%81%84)
        - [exportしているファイルでrenderするな](#export%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A7render%E3%81%99%E3%82%8B%E3%81%AA)
  - [errorもんごん](#error%E3%82%82%E3%82%93%E3%81%94%E3%82%93)
    - [解決](#%E8%A7%A3%E6%B1%BA-4)
  - [error もんごん](#error-%E3%82%82%E3%82%93%E3%81%94%E3%82%93)
    - [原因](#%E5%8E%9F%E5%9B%A0)
- [jest導入](#jest%E5%B0%8E%E5%85%A5)
- [jest react sample](#jest-react-sample)
- [jest snapshot](#jest-snapshot)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# react-tutorial をtypescriptで始める

[https://ja.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment](https://ja.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

ここに始めるときのコマンドが書いてあった

```bash
npx create-react-app my-app
```

[https://typescript-jp.gitbook.io/deep-dive/tsx/react](https://typescript-jp.gitbook.io/deep-dive/tsx/react)

ここに、create-react-appに--template typescriptつければtypescriptになるって書いてた

```bash
npx create-react-app my-app --template typescript
```

# AMD, UMD

[https://github.com/amdjs/amdjs-api/wiki/AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

Asynchronous Module Definition (AMD) 

[https://github.com/umdjs/umd](https://github.com/umdjs/umd)

Universal Module Definition (UMD)

- 多くの場合、AMDをベースとしている

# circleci導入
[https://dev.classmethod.jp/articles/circleci-getting-started-jest/](https://dev.classmethod.jp/articles/circleci-getting-started-jest/)

上記をコピペでそのまま動いた。

# lint-staged 導入
## eslint
何回も入れているので難なくできた
## prettier
何回も入れていry
## stylelint
入れたことなかったからError出た
### Error内容
```bash
✖ stylelint --fix:
Error: No configuration provided for /home/kajiri/ghq/github.com/kajirikajiri/jest-test/src/index.css
    at module.exports (/home/kajiri/ghq/github.com/kajirikajiri/jest-test/node_modules/stylelint/lib/utils/configurationError.js:10:14)
    at /home/kajiri/ghq/github.com/kajirikajiri/jest-test/node_modules/stylelint/lib/getConfigForFile.js:56:11
    at async Promise.all (index 0)
husky > pre-commit hook failed (add --no-verify to bypass)
```

configないよって言ってたのでErrorでググって追加した

[reference](https://github.com/stylelint/stylelint/issues/3625#issuecomment-416878213)


# jest のdebug

chrome://inspectにアクセスする

`Open dedicated DevTools for Node` をクリック

下記を実行

```bash
node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]
or on Windows
node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]
```

[reference](https://jestjs.io/docs/ja/troubleshooting#vs-code%E3%81%A7%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%E3%81%99%E3%82%8B)

# 遭遇したError
## Error文言
'ReactDOM' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686)
### 直訳
- 'ReactDOM'はUMDグローバルを指していますが、現在のファイルはモジュールです。代わりに import を追加することを検討してみてください。
### 解決

```javascript
import * as ReactDOM from 'react-dom';
```

[reference](https://qiita.com/taqm/items/ffcc363cb56f872967a4#%E3%81%A4%E3%81%84%E3%81%ABreact)

## Error文言
```bash
    /home/kajiri/ghq/github.com/kajirikajiri/jest-test/src/__tests__/sum.test.ts:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { sum } from '../sum';
                                                                                             ^^^^^^
```

### 解決
package.json
```json
{
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/__tests__/**/*.test.ts"
    ]
  }
}
```

[reference](https://qiita.com/mangano-ito/items/99dedf88d972e7e631b7#%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97)

[reference](https://github.com/kulshekhar/ts-jest/issues/390#issuecomment-351367425)

## error文言
```bash
'>' expected

Argument of type 'Game' is not assignable to parameter of type 'ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>'.

  Type 'Game' is missing the following properties from type 'ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>': type, keyts(2345)
```

### 解決
テストファイルの拡張子をtsからtsxに変える

```
*.test.ts
↓
*.test.tsx
```

[reference](https://stackoverflow.com/questions/60438275/react-typescript-error-parsing-error-expectreferenced)

## error文言
```bash
ts-jest[versions] (WARN) Version 3.7.5 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=3.8.0 <4.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.
```

### 直訳
ts-jest[version] (警告) インストールされている typescript のバージョン 3.7.5 は ts-jest でテストされていません。問題が発生している場合は、サポートされているバージョン (>=3.8.0 <4.0.0-0) の使用を検討してください。サポートされていないバージョンを使用している場合は、ts-jest で問題を報告しないでください。

### 解決

package.jsonのバージョン標記を修正した

## error文言

```bash
🎵 yarn jest
yarn run v1.22.4
$ /home/kajiri/ghq/github.com/kajirikajiri/jest-test/node_modules/.bin/jest
 FAIL  src/__tests__/index.test.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /home/kajiri/ghq/github.com/kajirikajiri/jest-test/src/__tests__/index.test.tsx:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import React from 'react'
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1270:14)
```

### 考察
上記Error文言より、 `By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".`とあるので、babelが無いんだろうと思い、package.jsonを確認したら入っていない。

[jest公式](https://jestjs.io/docs/ja/tutorial-react)をみると必要なパッケージにbabelがあったのでインストールしてみる

だめだった。。

### transformを修正してみる

```json
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
```

↓

```json
    "transform": {
      "^.+\\.[jt]sx?$": "ts-jest"
    },
```

結果次のErrorが発生した

#### cssのimportがおかしい

```bash
 FAIL  src/__tests__/index.test.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /home/kajiri/ghq/github.com/kajirikajiri/jest-test/src/index.css:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){body {
                                                                                                  ^

    SyntaxError: Unexpected token '{'

      1 | import * as React from "react"
      2 | import * as ReactDOM from 'react-dom';
    > 3 | import './index.css';
        | ^
      4 |
      5 | class Square extends React.Component {
      6 |   render() {

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1270:14)
      at Object.<anonymous> (src/index.tsx:3:1)
```

cssのimportの形式がしらないものらしい

[https://qiita.com/github0013@github/items/303a32d3037d322e67c0](https://qiita.com/github0013@github/items/303a32d3037d322e67c0)

[https://github.com/justinsisley/Jest-CSS-Modules](https://github.com/justinsisley/Jest-CSS-Modules)

これらをyarnしたらErrorが別のものになった

##### exportしているファイルでrenderするな

```bash
🎵 yarn test
yarn run v1.22.4
$ jest
 PASS  src/__tests__/sum.test.ts
 FAIL  src/__tests__/index.test.tsx
  ● Test suite failed to run

    Target container is not a DOM element.

      62 | // ========================================
      63 |
    > 64 | ReactDOM.render(
         |          ^
      65 |   <Game />,
      66 |   document.getElementById('root')
      67 | );

      at Object.render (node_modules/react-dom/cjs/react-dom.development.js:24828:13)
      at Object.<anonymous> (src/index.tsx:64:10)
      at Object.<anonymous> (src/__tests__/index.test.tsx:2:1)

Test Suites: 1 failed, 1 passed, 2 total
```

[https://stackoverflow.com/a/40090988/10677105](https://stackoverflow.com/a/40090988/10677105)

> App.jsx is supposed to export the App class and do nothing more, render should be called elsewhere.

stack-overflowによるとexportする以外になにもするなとのことだったので、そうする

テスト対象のファイルのみexportするだけにしとけばいいだろとおもって、対象だけ切り出しても同じエラーが出た。

なので、すべてのexportする必要があるファイルをexportした

```bash
🎵 yarn test
yarn run v1.22.4
$ jest
 PASS  src/__tests__/sum.test.ts
 PASS  src/__tests__/game.test.tsx
 › 1 snapshot written.

Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   1 written, 1 total
Time:        5.491 s
Ran all test suites.
Done in 7.72s.
yarn test  14.17s user 2.33s system 204% cpu 8.080 total
```

ようやく通過した

## errorもんごん

Property 'value' does not exist on type 'Readonly<{}> & Readonly<{ children?: ReactNode; }>'.ts(2339)

### 解決

propsのinterfaceを定義する必要があった

[reference](https://stackoverflow.com/a/52250014/10677105)

## error もんごん

```bash
    console.error
      Warning: It looks like you're using the wrong act() around your test interactions.
      Be sure to use the matching version of act() corresponding to your renderer:

      // for react-dom:
      import {act} from 'react-dom/test-utils';
      // ...
      act(() => ...);

      // for react-test-renderer:
      import TestRenderer from 'react-test-renderer';
      const {act} = TestRenderer;
      // ...
      act(() => ...);

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:88:30)

    console.error
      Warning: It looks like you're using the wrong act() around your test interactions.
      Be sure to use the matching version of act() corresponding to your renderer:

      // for react-dom:
      import {act} from 'react-dom/test-utils';
      // ...
      act(() => ...);

      // for react-test-renderer:
      import TestRenderer from 'react-test-renderer';
      const {act} = TestRenderer;
      // ...
      act(() => ...);
          in Unknown
```

### 原因

reactのtestで使えるactには二種類ある

'react-test-renderer'

[https://ja.reactjs.org/docs/test-renderer.html#testrenderercreate](https://ja.reactjs.org/docs/test-renderer.html#testrenderercreate)

'react-dom/test-utils'

[https://reactjs.org/docs/test-utils.html#act](https://reactjs.org/docs/test-utils.html#act)

後者が今回しようしたかった

child componentも含めてテストできる

# jest導入

[https://jestjs.io/docs/ja/getting-started](https://jestjs.io/docs/ja/getting-started)

# jest react sample

[https://jestjs.io/docs/ja/tutorial-react](https://jestjs.io/docs/ja/tutorial-react)

# jest snapshot

これはべんりだなー

![snapshot](/assets/images/posts/jest-snapshot.png)

```diff
🎵 yarn test
yarn run v1.22.4
$ jest
 PASS  src/__tests__/sum.test.ts
 FAIL  src/__tests__/board.test.tsx
  ● Board class

    expect(received).toMatchSnapshot()

    Snapshot name: `Board class 1`

    - Snapshot  -  9
    + Received  + 27

    @@ -7,40 +7,58 @@
        <div
          className="board-row"
        >
          <button
            className="square"
    -     />
    +     >
    +       0
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       1
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       2
    +     </button>
        </div>
        <div
          className="board-row"
        >
          <button
            className="square"
    -     />
    +     >
    +       3
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       4
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       5
    +     </button>
        </div>
        <div
          className="board-row"
        >
          <button
            className="square"
    -     />
    +     >
    +       6
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       7
    +     </button>
          <button
            className="square"
    -     />
    +     >
    +       8
    +     </button>
        </div>
      </div>

       6 |   const component = renderer.create(<Board />);
       7 |   const tree = component.toJSON();
    >  8 |   expect(tree).toMatchSnapshot();
         |                ^
       9 | });
      10 |

      at Object.<anonymous> (src/__tests__/board.test.tsx:8:16)

 › 1 snapshot failed.
 FAIL  src/__tests__/square.test.tsx
  ● Square class

    expect(received).toMatchSnapshot()

    Snapshot name: `Square class 1`

    - Snapshot  - 1
    + Received  + 3

      <button
        className="square"
    - />
    + >
    +   1
    + </button>

       6 |   const component = renderer.create(<Square value={1} />);
       7 |   const tree = component.toJSON();
    >  8 |   expect(tree).toMatchSnapshot();
         |                ^
       9 | });
      10 |

      at Object.<anonymous> (src/__tests__/square.test.tsx:8:16)

 › 1 snapshot failed.
 FAIL  src/__tests__/game.test.tsx
  ● Game class

    expect(received).toMatchSnapshot()

    Snapshot name: `Game class 1`

    - Snapshot  -  9
    + Received  + 27

    @@ -13,43 +13,61 @@
            <div
              className="board-row"
            >
              <button
                className="square"
    -         />
    +         >
    +           0
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           1
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           2
    +         </button>
            </div>
            <div
              className="board-row"
            >
              <button
                className="square"
    -         />
    +         >
    +           3
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           4
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           5
    +         </button>
            </div>
            <div
              className="board-row"
            >
              <button
                className="square"
    -         />
    +         >
    +           6
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           7
    +         </button>
              <button
                className="square"
    -         />
    +         >
    +           8
    +         </button>
            </div>
          </div>
        </div>
        <div
          className="game-info"

       6 |   const component = renderer.create(<Game />);
       7 |   const tree = component.toJSON();
    >  8 |   expect(tree).toMatchSnapshot();
         |                ^
       9 | });
      10 |

      at Object.<anonymous> (src/__tests__/game.test.tsx:8:16)

 › 1 snapshot failed.
Snapshot Summary
 › 3 snapshots failed from 3 test suites. Inspect your code changes or run `yarn test -u` to update them.

Test Suites: 3 failed, 1 passed, 4 total
Tests:       3 failed, 1 passed, 4 total
Snapshots:   3 failed, 3 total
Time:        4.441 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn test  22.97s user 2.65s system 437% cpu 5.856 total
```
