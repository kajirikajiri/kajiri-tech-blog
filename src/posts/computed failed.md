---
title: computed failed
description: input description
date: 2020-08-01 20:25:36
---

# まとめ
* リアクティブでない値はcomputedで使用しない
* computed内でリアクティブてない値が評価され、そこで処理が終了(returnなどで)した場合、以降のcomputedの処理が行われない。

# 気になった記事
3. 微妙に再計算されない/されるcomputed
https://ics.media/entry/200716/

# 読んてみて
最初記事の内容をよく読まず、computedにリアクティブな値(this.hogeとか)を渡して試してみた。
結果、普通に再計算が行われたため、あれ？？となった。
そこで記事をよく読んでみると、リアクティブな値という注意書きを見つけて、試してみたらたしかに再計算に失敗した。
また、リアクティブでない値が途中で変更された場合にも以降のcomputedの再計算がされなかった。注意したい。

```
<template>
  <div>
    <div>
      {{ countComputedSuccess }}
    </div>
    <div>
      {{ countComputedFailed }}
    </div>
    <div
      style="border: 1px black solid; padding: 10px;"
      @click="clickAddCounter()"
    >
      ++ count
    </div>
    <div
      style="border: 1px black solid; padding: 10px; margin-top: 20px;"
      @click="clickToggleFlag()"
    >
      toggleFlag
    </div>
  </div>
</template>

<script>
let nonReactiveFlag = false // リアクティブでないフラグ
export default {
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    countComputedSuccess() {
      if (nonReactiveFlag) return 0
      return this.counter
    },
    countComputedFailed() {
      if (!nonReactiveFlag) return 0
      return this.counter
    },
  },
  methods: {
    clickToggleFlag() {
      nonReactiveFlag = !nonReactiveFlag // リアクティブでないフラグを更新
      console.log(nonReactiveFlag) // リアクティブでないフラグをコンソールで確認
    },
    clickAddCounter() {
      this.counter = this.counter + 1
    },
  },
}
</script>

<style></style>

```

# 実際に試してみた
https://kajirikajiri.netlify.app/#/computed-failed

# github
https://github.com/kajirikajiri/homepage/blob/master/src/views/ComputedFailed.vue