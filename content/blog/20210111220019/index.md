---
title: keyが同じでdomain属性が別のcookieを調べた(js-cookie)
description: >-
  js-cookieの場合は先に見つかった値が取得できるようです。また、domain属性はdocument.cookieに含まれないのでdomainを指定した取得はできません。
date: 2021-01-11T22:49:44.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [js-cookieの返り値はstring|undefined](#js-cookie%E3%81%AE%E8%BF%94%E3%82%8A%E5%80%A4%E3%81%AFstringundefined)
- [document.cookieには同じkeyの値を複数設定することができる](#documentcookie%E3%81%AB%E3%81%AF%E5%90%8C%E3%81%98key%E3%81%AE%E5%80%A4%E3%82%92%E8%A4%87%E6%95%B0%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B)
- [js-cookieは特定の属性を指定してcookieを読むことはできない](#js-cookie%E3%81%AF%E7%89%B9%E5%AE%9A%E3%81%AE%E5%B1%9E%E6%80%A7%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6cookie%E3%82%92%E8%AA%AD%E3%82%80%E3%81%93%E3%81%A8%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84)
- [js-cookieのgetは実装がどうなっている](#js-cookie%E3%81%AEget%E3%81%AF%E5%AE%9F%E8%A3%85%E3%81%8C%E3%81%A9%E3%81%86%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B)
- [特定のdomainのcookieを消したいときにどうすればよいのか](#%E7%89%B9%E5%AE%9A%E3%81%AEdomain%E3%81%AEcookie%E3%82%92%E6%B6%88%E3%81%97%E3%81%9F%E3%81%84%E3%81%A8%E3%81%8D%E3%81%AB%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E3%82%88%E3%81%84%E3%81%AE%E3%81%8B)
- [document.cookieはdomainを取得できないのかためした](#documentcookie%E3%81%AFdomain%E3%82%92%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%AE%E3%81%8B%E3%81%9F%E3%82%81%E3%81%97%E3%81%9F)
- [以前pupeteerとjestを連携してe2eテストをしたときの疑問に対する答え](#%E4%BB%A5%E5%89%8Dpupeteer%E3%81%A8jest%E3%82%92%E9%80%A3%E6%90%BA%E3%81%97%E3%81%A6e2e%E3%83%86%E3%82%B9%E3%83%88%E3%82%92%E3%81%97%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AE%E7%96%91%E5%95%8F%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E7%AD%94%E3%81%88)

<!-- tocstop -->

</div></details>

<!-- toc area end -->


## js-cookieの返り値はstring|undefined
package.jsonのversionが下記でvscode上ではCookies.getの返り値はstring|undefinedとなっていた

```json
{
  "@types/js-cookie": "^2.2.6",
  "js-cookie": "^2.2.1",
}
```

```javascript
import Cookies from 'js-cookie'
Cookies.get('hoge') // <- string
```

## document.cookieには同じkeyの値を複数設定することができる
しかし、もしcookieにdomainを指定した場合、userがkeyに指定されたcookieは複数見つかる

```javascript
document.cookie = "user=ja.reactjs.org;domain=ja.reactjs.org"
// "user=ja.reactjs.org;domain=ja.reactjs.org"

document.cookie
// "user=ja.reactjs.org"

document.cookie = "user=reactjs.org;domain=reactjs.org"
// "user=reactjs.org;domain=reactjs.org"

document.cookie
// "user=ja.reactjs.org; user=reactjs.org"
```

## js-cookieは特定の属性を指定してcookieを読むことはできない
[js-cookieのREADME](https://github.com/js-cookie/js-cookie#basic-usage)
>Note: It is not possible to read a particular cookie by passing one of the cookie attributes (which may or may not have been used when writing the cookie in question):

日本語訳
>注意: クッキーの属性(問題のクッキーを書くときに使われたかもしれないし、使われていないかもしれない)の一つを渡すことで、特定のクッキーを読むことはできません。

## js-cookieのgetは実装がどうなっている
[js-cookieのgetの実装](https://github.com/js-cookie/js-cookie/blob/eceefcc0be5bcb07d6ca32b03978e2c6f8cc848e/src/api.mjs#L50)

たしかに見た限りでは属性を見ていない。また、指定したキーが見つかった場合にbreakしているので複数の値が設定されていたとしても最初の１つを返すようだ

## 特定のdomainのcookieを消したいときにどうすればよいのか
[stackoverflow:特定のcookieを消す必要がある](https://stackoverflow.com/questions/2959010/how-to-get-the-domain-value-for-a-cookie-in-javascript#:~:text=To%20read%20a%20cookie%20that,and%20read%20it%20from%20there.&text=specificity%2C%20eg.%3A-,document.,%3A00%20GMT'%3B%20document.)
>Sorry, all you get is what you see in document.cookie. The cookie metadata like path, domain and expires are not visible to site code (neither to JavaScript nor to the server-side).

日本語訳
申し訳ありませんが、document.cookieに表示されているものしか表示されません。パス、ドメイン、有効期限などのクッキーのメタデータはサイトコードからは見えません(JavaScriptからもサーバー側からも見えません)。

>If, as you say, you only need to remove a cookie, what you could do is try to remove the cookie at every possible level of specificity, eg.:

日本語訳
>あなたが言うように、クッキーを削除する必要があるだけならば、あなたができることは、例えば、可能な限りの特異性のレベルでクッキーを削除しようとすることです。

## document.cookieはdomainを取得できないのかためした
たしかにdocument.cookieはdomainを取得できない

```javascript
document.cookie = "user=ja.reactjs.org;domain=ja.reactjs.org"
// "user=ja.reactjs.org;domain=ja.reactjs.org"
document.cookie
// "user=ja.reactjs.org"
document.cookie = "user=reactjs.org;domain=reactjs.org"
// "user=reactjs.org;domain=reactjs.org"
document.cookie
// "user=ja.reactjs.org; user=reactjs.org"
```

## 以前pupeteerとjestを連携してe2eテストをしたときの疑問に対する答え
document.cookieは、デフォルトでは[設定したdomainでのみアクセス出来る](https://ja.javascript.info/cookie#ref-1082)

以前自分がテストしていたときは、foo.example.comでcookieをセットしていた。このときセットされたcookieは、foo.example.comでアクセスでき、example.comではアクセスできない。
なので、cookieのdomainにexample.comを指定する必要があった。

ほかにも、example.comのテストが終了直後にcookieを保存して、kajirikajiri.netlify.appでcookieを使ったテストが失敗することがあった。。これはつまり、example.comにいる状態でkajirikajiri.netlify.appで使用するcookieをセットしたということになり、cookieは別のURLをまたいでセットすることができないので、kajirikajiri.netlify.appではcookieが見えない。という状況になっていたと考えられる。

それ以外には、cookieにdomain属性を指定して保存、domain属性を指定せず保存したcookieがjs-cookieで思ったように取得できないことがあった。js-cookieが取得するのは最初に見つけたcookieであるとjs-cookieのソースを読んで確認した。なのでdomain属性の指定なし、指定ありの両方を扱う場合、どっちが先に設定されたかで取得される値が変化すると考えられるのでやめたほうがいい。そもそも、あるkeyのcookieを複数のdomain属性で保存しなければ発生しなかったと考えられる。

