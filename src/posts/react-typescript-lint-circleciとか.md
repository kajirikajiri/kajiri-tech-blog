---
title: react-typescript-lint-circleciとか
description: input description
date: 2020-08-10 23:12:49
---
# 青果物
[https://github.com/kajirikajiri/react-typescript-jest-lint](https://github.com/kajirikajiri/react-typescript-jest-lint)

# やったこと
circleciでpushごとにテスト
jestでunitテスト, integrationテスト
typescriptでstaticなテスト
予定: e2e

# 参考
[https://qiita.com/naoking99/items/3fd211deb8711fae8204](https://qiita.com/naoking99/items/3fd211deb8711fae8204)
勉強になった

static, unit, integration, end to endのテストをバランスよくやる

バランスよくとは、トロフィーのようの形をイメージ [reference](https://testingjavascript.com/)

比率的には、staticが一番小さい。けど一番高速

次がunitテスト、量は一番多い、なかなか高速

次がintegrationテスト、ちょっと遅いけど、結構書く

最後にe2eテスト、かなり遅い(testcafeで経験済み）、量は少なめ
