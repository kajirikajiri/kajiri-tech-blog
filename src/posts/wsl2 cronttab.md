---
title: wsl2 cronttab
description: input description
date: 2020-07-18 23:07:43
---

# 内容
cronをwsl2 Ubuntu 20.04で使用する

# やったこと
## 設定ファイルを修正

```
sudo vi /etc/rsyslog.d/50-default.conf
```

```
# 該当の行のコメントアウトを外す
# cron.* /var/log/cron.log
↓
cron.* /var/log/cron.log
```

これで/var/log/cron.logにログが出力される

## リスタートとか、statusとか
[https://qiita.com/SenK/items/f5164e4e642de167e1a5#comment-0f096172d03e04c2f2fc](https://qiita.com/SenK/items/f5164e4e642de167e1a5#comment-0f096172d03e04c2f2fc)

どうやら、wsl2 ?? Ubuntu20.04??ではコマンドが違うようで

```
sudo /etc/init.d/cron restart
sudo /etc/init.d/cron status
```

これでokだった

でもcrontab -eはcrontab -eだった

## debug
色々知りたい情報があったときに役に立った

* * * * * pwd >> output.log

## crontab -r封印
crontab -e 試してたら、いきなりコマンドが消えて？？なったけど、どうやらコマンドが消えたようだ

[https://qiita.com/kawaz/items/1620300551b5b3f2eccc](https://qiita.com/kawaz/items/1620300551b5b3f2eccc)

これを参考に-rを封印した

## 便利
[https://crontab.guru/#0_16_*_*_*](https://crontab.guru/#0_16_*_*_*)

# 今回のgit
[https://github.com/kajirikajiri/cron](https://github.com/kajirikajiri/cron)