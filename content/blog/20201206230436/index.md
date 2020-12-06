---
title: SOLIDのSについて調べた
description: SOLIDのSはSRP。Single Responsibility Principle
date: 2020-12-06T23:20:09.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [まず調べてみた](#%E3%81%BE%E3%81%9A%E8%AA%BF%E3%81%B9%E3%81%A6%E3%81%BF%E3%81%9F)
- [実装してみた](#%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F)
- [repository](#repository)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# まず調べてみた

https://www.bookstack.cn/read/clean-code-javascript/spilt.6.README.md
- s,o,l,i,dそれぞれに完結な例が乗っていてわかりやすく感じた。

https://github.com/vladilenm/SOLID_javascript
- このリポジトリもs,o,l,i,dそれぞれの完結な例文

https://qiita.com/gomi_ningen/items/02c42e2487d035f9c3c8
- クラスを変更する理由は複数存在してはいけない
- 変化の兆候がないのにSRPを含めた原則を適用するのは賢明ではない。原則を適用することを目的にするのはナンセンスである。
- 結合している役割を見つけそれらを分離する作業は、ソフトウェア設計の本質である

# 実装してみた
上記記事を読んで、 `変化の兆候がないのにSRPを含めた原則を適用するのは賢明ではない。原則を適用することを目的にするのはナンセンスである。` によって、小さい例文だけで表そうとするのではなく、結合してしまった時に分離するのが正しい順番だと思ったが、とりあえず小さい例文を考えて実装してみた

```javascript
interface User {
  name: string;
  id: number;
}

type NoticeType = 'email'|'sms';

class User {
  constructor(user:{name:string,id:number}) {
    this.name = user.name
    this.id = user.id 
  }

  set setName(value:string) {
    this.name = value
  }
}

class UserSettings {
  noticeType: NoticeType;
  #user: User;

  constructor(user:User, noticeType:NoticeType) {
    this.#user = user
    this.noticeType = noticeType
  }

  set setNoticeType(value:NoticeType) {
    this.noticeType = value
  }

  get getNoticeType(){
    return this.noticeType
  }
}


const bob = new User({name:'bob',id: 1})

const bobSettings = new UserSettings(bob, 'email')

bobSettings.setNoticeType = 'email'

console.log(bob)

console.log(bobSettings)

```

この実装なら、UserはUserの変更（名前）のみを請け負ってるし、Userの通知に関して変更する場合はUserSettingsをUserを引数にとって実装する必要があり、機能ごとに分割できていると思った。
気づいた問題点を上げる
- UserSettingsがUserを受け取っているが使っていない
  - rubyだと、userインスタンスを受け取ってuserに保存する必要があるので、setNoticeTypeでthis.#user.noticeType = valueみたいに使うだろうと思ってこうした。

いいと思った点
- UserSettingsからUsreが見えない。
  - consoleに出力するとわかるが、UserSettingsからはUserが見えない。#でprivateなアクセサを定義できる。TypeScript3.8から使えるようだ
    - https://www.typescriptlang.org/docs/handbook/classes.html#ecmascript-private-fields

# repository

https://github.com/kajirikajiri/solid-principles

