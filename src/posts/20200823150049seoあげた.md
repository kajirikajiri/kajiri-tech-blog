---
title: seoあげた
description: seoが70,80,100くらいになっていたのでがんばって上げた
date: 2020-08-02 21:19:31
---

![](/assets/images/posts/seo.png)

このサイトはnetlifyのテンプレートをもとに作らている。

[https://github.com/ixartz/Eleventy-Starter-Boilerplate](https://github.com/ixartz/Eleventy-Starter-Boilerplate)

もともとseoが高かったが、色々追加しているうちに70,80,100くらいに下がっていた(もとは90,100,100くらい)

いろいろやって、seoここまで戻した。

# やったこと
## darkmode-jsのaria-checkedを削除
darkmode-jsをいれた。そしたら、elementが挿入されたのだが、そいつにaria-checkedというattributeがついていた。

どうやら、aria-*は特別なattributeのようで、決まった形式があるようだった。

[https://stackoverflow.com/questions/50003031/aria-attributes-do-not-have-valid-values](https://stackoverflow.com/questions/50003031/aria-attributes-do-not-have-valid-values)

しかし、今回の問題である、aria-checkedというのは特に指定されているわけではなさそうだった。

見つからなかったので消してみたら、lighthouseの怒りが静まった

```javascript
<script>
  timer = setInterval(function(){
    const darkModeElement = document.querySelector('.darkmode-toggle')
    if (darkModeElement){
      clearInterval(timer)
      darkModeElement.removeAttribute('aria-checked')
    }
  }, 500)
</script>
```

## labelを追加
paginationをjumpできる機能を作ったが、selectの外側にはlabelをつけると特定の端末(書籍リーダー？)から、判断しやすい。みたいなことが書いてあったので、必要なかったが絵文字をつけた。

```html
<label>
  🔖
  <select name="pagination-jump">
    <option><%= pagination.pageNumber + 1 %></option>
  </select>
</label>
```

---

こんなかんじで、主にaccessibilityの低下でした。

.ejsとかつかったことなかったけど、なかなか便利だった。

Javaのjspだっけ、みたい。Railsのerbもこんなだった。

VueとかReactがどれだけかきやすいのか身にしみた。