---
title: strong-parameterにwindow.locationから渡したかった
description: Ruby on Railsのstrong-parameterにJaraScriptのwindow.locationから値を渡す方法です
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/21 20:52:30 01341b9</li>
<li>2020/11/15 17:56:56 8e7d6a6</li>
<li>2020/11/15 13:59:03 490d2a0</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [結論](#%E7%B5%90%E8%AB%96)
- [参考にさせていただきました](#%E5%8F%82%E8%80%83%E3%81%AB%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F)

<!-- tocstop -->

</div></details>

<!-- toc area end -->
## 結論

```javascript
window.location = '/user?strong_params[name]=kajiri'
```

```ruby
private

def sample_params
  params.require(:strong_params).permit(:name)
end
```

## 参考にさせていただきました

[stack overflow](https://stackoverflow.com/questions/12809072/url-parameters-with-brackets)によると、配列を渡すためのもので、postリクエストでより多く使用されている。

知らんかった。

railsのstrong parameterってこうなってたんや


