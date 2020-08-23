---
title: cargo-makeやってみた
description: input description
date: 2020-08-16 14:45:50
---

makeファイル書いてみたら、すごい書きやすかった
それに思ったとおりに動いた

```bash
all: popup other
popup: clean__popup build__popup copy__popup
other: clean__other build__other copy__other
test: test__popup test__other e2e__popup

clean__popup:
	rm -rf dist/static dist/popup.html
build__popup:
	cd popup && yarn build
copy__popup:
	cd popup/build && cp index.html ../../dist/popup.html && cp -r static ../../dist/
test__popup:
	cd popup && yarn test
e2e__popup:
	cd popup && yarn e2e:headfull

clean__other:
	rm -rf dist/js dist/manifest.json dist/options.html dist/icon.png
build__other:
	cd other && yarn build
copy__other:
	cd other/dist && cp -r js ../../dist/ && cp icon.png ../../dist/icon.png && cp manifest.json ../../dist/manifest.json && cp options.html ../../dist/options.html
test__other:
	cd other && yarn test
```

前からやろうと思ってたcargo-makeもついでにやってみた

```toml
[config]
skip_core_tasks = true
[tasks.all]
run_task = [
	{name = ["other", "popup"]}
]
[tasks.test]
run_task = [
	{name = ["test_other", "test_popup", "e2e_popup"]}
]
[tasks.other]
run_task = [
	{name = ["clean_other", "build_other", "copy_other"]}
]
[tasks.popup]
run_task = [
	{name = ["clean_popup", "build_popup", "copy_popup"]}
]
[tasks.clean_other]
category = "other_file"
script = [
'''
rm -rf dist/js dist/manifest.json dist/options.html dist/icon.png
'''
]
[tasks.build_other]
category = "other_file"
script = [
'''
cd other
yarn build
'''
]
[tasks.copy_other]
category = "other_file"
script = [
'''
cd other/dist && \
cp -r js ../../dist/ && \
cp icon.png ../../dist/icon.png && \
cp manifest.json ../../dist/manifest.json && \
cp options.html ../../dist/options.html
'''
]
[tasks.test_other]
category = "other_file"
script = [
'''
cd other && \
yarn test
'''
]
[tasks.clean_popup]
category = "popup_file"
script = [
'''
rm -rf dist/static dist/popup.html
'''
]
[tasks.build_popup]
category = "popup_file"
script = [
'''
cd popup && \
yarn build
'''
]
[tasks.copy_popup]
category = "popup_file"
script = [
'''
cd popup/build && \
cp index.html ../../dist/popup.html && \
cp -r static ../../dist/
'''
]
[tasks.test_popup]
category = "popup_file"
script = [
'''
cd popup && \
yarn test
'''
]
[tasks.e2e_popup]
category = "popup_file"
script = [
'''
cd popup && \
yarn e2e:headfull
'''
]
```

置き換えただけ

簡潔ではなくなったけど、見た感じこっちのほうが見やすいんだろうなっていうきがした

[reference](https://qiita.com/ota42y/items/299197505062d4f7958b)

[reference](https://ota42y.com/blog/2020/08/02/cago-make/)

[reference](https://github.com/sagiegurari/cargo-make)

[reference](https://tkat0.github.io/posts/cargo-make-1/)