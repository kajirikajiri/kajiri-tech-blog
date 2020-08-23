---
title: chrome extension with typescript調査
description: input description
date: 2020-08-03 14:14:04
---
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