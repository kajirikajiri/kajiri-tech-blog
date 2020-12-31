---
title: vuejsでcancelボタンを実装する
description: vuejsでcancelボタンを実装が面倒だったので記事にしました
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/11/22 16:07:56 ca5e51a</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [codesandboxの実装例](#codesandbox%E3%81%AE%E5%AE%9F%E8%A3%85%E4%BE%8B)
- [実際のコード](#%E5%AE%9F%E9%9A%9B%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89)
- [欠点](#%E6%AC%A0%E7%82%B9)
- [利点](#%E5%88%A9%E7%82%B9)
- [他の実装の例](#%E4%BB%96%E3%81%AE%E5%AE%9F%E8%A3%85%E3%81%AE%E4%BE%8B)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

## codesandboxの実装例

<iframe src="https://codesandbox.io/embed/restless-mountain-xqoix?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cancel button"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 実際のコード

```javascript
<template>
  <div>
    <input v-model="inputValue"/>
    <button type="submit" @click="savedValue = inputValue">save</button>
    <button type="submit" @click="inputValue = savedValue">cancel</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      savedValue: "saved",
      inputValue: "",
    };
  },
  mounted(){
    this.inputValue = this.savedValue
  }
};
</script>

```

## 欠点
- ２つの値を使用するのでコードを見た時に伝わりづらい気がした

## 利点
- あまり難しいことをしていないのでvueをあまりわからない人でも伝わると思う

## 他の実装の例

https://shimablogs.com/vue-form-edit-cancel


