---
title: railsのstrong-parameterをwindow.locationに渡したかった
description: description
date: 2020-11-15 13:56:29
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [結論](#%E7%B5%90%E8%AB%96)
- [参考にさせていただきました](#%E5%8F%82%E8%80%83%E3%81%AB%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# 結論

```javascript
window.location = '/user?strong_params[name]=kajiri'
```

```ruby
private

def sample_params
  params.require(:strong_params).permit(:name)
end
```

# 参考にさせていただきました

[stack overflow](https://stackoverflow.com/questions/12809072/url-parameters-with-brackets)によると、配列を渡すためのもので、postリクエストでより多く使用されている。

知らんかった。

railsのstrong parameterってこうなってたんや