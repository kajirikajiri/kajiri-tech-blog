---
title: rubyのbase64encode→decodeを日本語に実行したら失敗した
description: 日本語にrubyのbase64 encode→decodeをしたら文字化けして悩んだ時の話です。実際には文字コードが違うだけでした
date: 2020-12-31T21:57:23.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/06 16:02:25 ba65787</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [実際の出力をオンラインエディタで確認](#%E5%AE%9F%E9%9A%9B%E3%81%AE%E5%87%BA%E5%8A%9B%E3%82%92%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%81%A7%E7%A2%BA%E8%AA%8D)
- [実際に起きたこと](#%E5%AE%9F%E9%9A%9B%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%9F%E3%81%93%E3%81%A8)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## 実際の出力をオンラインエディタで確認

http://tpcg.io/aaIkeWVL

## 実際に起きたこと

```ruby
require 'base64'

encoded = Base64.encode64('おはよう')
decoded = Base64.decode64(encoded)
p decoded
# "\xE3\x81\x8A\xE3\x81\xAF\xE3\x82\x88\xE3\x81\x86"

p decoded.encoding
# #<Encoding:ASCII-8BIT>

p decoded.force_encoding('utf-8')
# "おはよう"
```

解決法まで書きましたが、force_encoding('utf-8')するといいです。

最初は英語のhelloをエンコードして成功。次に日本語も見ておくか、と思いやってみたら変な文字に。
過去にcsvの文字コードで色々やっていた同僚にhelpを求めたところ、上記解決策を教えてもらいました。
ASCII-8BITはよく知りませんが
rubyで文字がおかしくなったら、
- TEXT.encoding
で確認するようにします


