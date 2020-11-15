---
title: wsl2で同じ環境を複数つくる
description: Windows Subsystem for Linuxで同じ環境を複数作成する方法を共有します。
date: 2020-11-15 18:00:54
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/15 13:59:03 490d2a0</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [なぜやろうとしたか](#%E3%81%AA%E3%81%9C%E3%82%84%E3%82%8D%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E3%81%8B)
- [流れ](#%E6%B5%81%E3%82%8C)
- [詳細な流れ](#%E8%A9%B3%E7%B4%B0%E3%81%AA%E6%B5%81%E3%82%8C)
- [ついでに](#%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# なぜやろうとしたか
自分のつかっているwsl2のUbuntu20.04が遅くなってきたので最初から作り直したかった。
しかし、今の状態は残しておきたい。だけど、Ubuntu20.04が使いたい。
なのでUbuntu20.04がふたつほしい。いやいっぱいほしい

# 流れ
- ubuntuをダウンロード
- 追加する

# 詳細な流れ
まずはubuntuをダウンロードします

[Ubuntu16.04](https://cloud-images.ubuntu.com/xenial/current/)

[Ubuntu18.04](https://cloud-images.ubuntu.com/bionic/current/)

[Ubuntu19.10](https://cloud-images.ubuntu.com/eoan/current/)

[Ubuntu20.04](https://cloud-images.ubuntu.com/focal/current/) ← 自分はこれを使いました

ダウンロードしたらwsl2に追加します。自分はpowershellでやりました

```bash
# wsl --import <Name: 好きな名前をつけましょう> <Install: インストール先です> <File: 先程ダウンロードしたファイルのパスです>
wsl --import Ubuntu-20.04-new C:\Users\kajir\AppData\Local\Ubuntu-20.04-new .\Downloads\focal-server-cloudimg-amd64-wsl.rootfs.tar.gz
```

追加できたかな

```bash
# 入力
wsl -l -v

# 出力
  NAME                   STATE           VERSION
  Ubuntu-20.04-new       Running         2
  Ubuntu-20.04           Running         2
```

このように追加できました。

[元の記事](https://www.hanselman.com/blog/easily-move-wsl-distributions-between-windows-10-machines-with-import-and-export)

# ついでに
バックアップもできます。wsl --export を使います。

[qiita](https://qiita.com/souyakuchan/items/9f95043cf9c4eda2e1cc)
