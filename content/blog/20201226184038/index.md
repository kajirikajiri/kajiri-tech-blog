---
title: kyashのQRコード機能を使うと送金・請求ができる
description: kyashのQRコード機能を使ってみました
date: 2020-12-31T21:57:23.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/26 18:55:55 b999f19</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [きっかけ](#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91)
- [やってみた](#%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F)
- [できた](#%E3%81%A7%E3%81%8D%E3%81%9F)
- [ついでに](#%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## きっかけ
はてぶをながめてたら手書きのドラえもんが流れてきて、紹介してた
https://konifar.hatenablog.com/entry/2020/12/01/002555
どうやら、kyashにはQRコード機能があり、そこからQRコードが生成できる。アプリ上では生成できるだけだが、URLにパラメータを追加することで送金画面・請求画面に飛ばしたり、金額・メッセージを入力済みの状態にできる

## やってみた
1. KyashアプリでQRコードを生成（アカウント→QRコード）
2. https://kyash-barcode-generator.netlify.app/
3. 先程1で生成したQRコードを2のページに貼り付け
4. action, amount, messageを入力
5. 生成されたURLにアクセス

## できた
kyash://qr/u/1666172912167150824?action=send&amount=100&message=hello+kajiri+%21

これで100円をhello kajiri !というメッセージ付きで送金する画面に移動できる

## ついでに
buy me a coffee
も試してみた。登録して、paypalとstripeのアカウントを紐付けるだけ。

https://www.buymeacoffee.com/home


