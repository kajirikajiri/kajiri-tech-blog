---
title: obsidianメモ帳をセッティングした
description: input description
date: 2020-08-01 20:27:18
---

# なにについて
https://obsidian.md/

# こまったこと
wsl2に対応していない？ || linuxに対応していない？みたいでwindowsにwindowsインストーラーでインストールしたら、wsl2内部のディレクトリを選択できなかった。
cドライブ直下は指定できたので、wsl2の内部ディレクトリは呼び出せないんだと思う。
で、windowsにgitとか入れず、wsl2のみで開発していたので、obsidianの指定ディレクトリをwindowsのgitから呼び出すことになった。
しかし、windowsに今更gitとかインストールが面倒だったので、cronでwsl2から/mnt/c/以下を呼び出すことで解決した。
ghqとfzfを使っていなければ、ここまで面倒くさくなかった。
ctrl gでghqが起動、ディレクトリを選択してといういつものルーティンから外れるのが非常に面倒だったので、cronで保存することにした。
久しぶりにcronを使ったらめんどかった