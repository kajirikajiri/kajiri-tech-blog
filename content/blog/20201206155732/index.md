---
title: attr_accessorで生成される値の初期値について悩んだ
description: attr_accessorで生成される値の初期値について考えてみたのですが、考えてみたら値を代入したらそれで、代入しなかったらnilだなって思いました
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

- [結果をオンラインエディタで確認](#%E7%B5%90%E6%9E%9C%E3%82%92%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%81%A7%E7%A2%BA%E8%AA%8D)
- [雑に書いたサンプル](#%E9%9B%91%E3%81%AB%E6%9B%B8%E3%81%84%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## 結果をオンラインエディタで確認

http://tpcg.io/kEJ3mtih

## 雑に書いたサンプル

```ruby
class Person
  attr_accessor :hand
  def initialize(params={})
    @hand = params[:hand]
  end
end

ben = Person.new(hand: 8)
p ben.hand
# 8

pen = Person.new
p pen.hand
# nil
```

hand8ってなんやねん。10だろ。fingerか


