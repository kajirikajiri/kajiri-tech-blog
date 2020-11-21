---
title: v-modelはsyntax sugar(糖衣構文)
description: 'v-modelはv-bind:valueとv-on:inputのsyntax sugarだということを、たびたび忘れてしまうので記事にしました。'
date: 2020-11-21T23:55:26.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [例](#%E4%BE%8B)
- [コンポーネントで使う場合は？](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7%E4%BD%BF%E3%81%86%E5%A0%B4%E5%90%88%E3%81%AF)
- [codesandbox](#codesandbox)
- [参照先](#%E5%8F%82%E7%85%A7%E5%85%88)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

# 例

例えば、以下２つは同じことを表しています。

```javascript
<input v-model="searchText">
```

```javascript
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

# コンポーネントで使う場合は？

コンポーネントで使用する場合はこのようになります。

```javascript
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

ただし、コンポーネントは以下のように定義しなくてはいけません
- value属性をvalue propにバインドする
- 入力時に新しい値で独自のカスタムイベントを発行する

このようになります

```javascript
<template>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: ['value']
}
</script>
```

これでv-modelはこのコンポーネントで完全に動作します

```javascript
<custom-input v-model="searchText"></custom-input>
```

# codesandbox

<iframe src="https://codesandbox.io/embed/focused-wing-ufv0q?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="v-model is syntax sugar"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

# 参照先

https://jp.vuejs.org/v2/guide/components.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7-v-model-%E3%82%92%E4%BD%BF%E3%81%86

