---
title: chrome extension with typescript調査
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


- [良さそうなもの](#%E8%89%AF%E3%81%95%E3%81%9D%E3%81%86%E3%81%AA%E3%82%82%E3%81%AE)
  - [chromeのmock](#chrome%E3%81%AEmock)
  - [chromeをtypescriptで始める](#chrome%E3%82%92typescript%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B)
- [疑問](#%E7%96%91%E5%95%8F)
- [要求](#%E8%A6%81%E6%B1%82)
  - [testがかけること](#test%E3%81%8C%E3%81%8B%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8)
  - [たぶんwebpackが必要](#%E3%81%9F%E3%81%B6%E3%82%93webpack%E3%81%8C%E5%BF%85%E8%A6%81)
  - [chrome extensionに求める機能](#chrome-extension%E3%81%AB%E6%B1%82%E3%82%81%E3%82%8B%E6%A9%9F%E8%83%BD)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# 良さそうなもの
## chromeのmock
- [https://github.com/acvetkov/sinon-chrome](https://github.com/acvetkov/sinon-chrome)

## chromeをtypescriptで始める
- jestあり
- [https://github.com/chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)

# 疑問
- sinon-chromeはmocha, chaiで例が書いてあり、chrome-extension-typescript-starterはjestで例が書いてあること。

# 要求
## testがかけること
- 特に考えないで作ったら、exportでエラーを出力することに気づき、テストが作れなかったため。
## たぶんwebpackが必要
- 上記testがかけることで書いた問題点をwebpackで解消できると考えている。一つのjsにまとめるのなら、exportが必要ないはず。
## chrome extensionに求める機能
- あとでまとめたい。例えば、executeScriptのテストは必要だと思っていたが、実際は不要(そもそもできない？)な気がする。（できるならやりたい）
