---
title: callback-promise-async.md
description: description
date: 2020-08-29 18:44:57
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>

</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [callback](#callback)
- [callback](#callback-1)
- [promise](#promise)
- [async await](#async-await)
- [for await of](#for-await-of)
- [promiseMap](#promisemap)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</div></details>

<!-- toc area end -->
# callback

[github](https://github.com/kajirikajiri/callback-promise-async)

# callback

```javascript
const callback = (i) =>{
  setTimeout(()=>{
    console.log(i)
  }, 3000)
}

const run = (callback) => {
  setTimeout(() =>{
    console.log(1)
    callback(2)
  }, 3000)
}

run(callback)
```

# promise

```javascript
const promise1 = (b:boolean) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (b) {
        resolve('ok')
      } else {
        reject('ng')
      }
    }, 2000)
  })
}

promise1(true).then(out => {
  console.log(out)
  console.log('then')
  // プロミスを返しているわけではないので次の処理に飛ぶ
  setTimeout(()=>{
    // 四秒後にconsoleが表示される
    console.log(2)
  }, 4000)
}).catch(err => {
  // rejectされないのでcatchに入らない
  console.log(err)
}).then(()=> {
  // プロミスなので２秒後に結果が返る
  return promise1(false)
}).then(ou=>{
  // rejectされるのでthenに入らない
  console.log(ou)
}).catch(err=> {
  // rejectされたのでコンソール
  console.log(err)
})
```

# async await 

```javascript
const asyncFunc = (b:boolean)=>{
  return new Promise((resolve, rejects)=>{
    setTimeout(()=>{
      b?resolve('ok'):rejects('ko')
    }, 2000)
  })
}

(async()=>{
  const result = await asyncFunc(true)
  console.log(result)
  console.log('2')
  // try {
    // try catchしないとErrorで落ちる
    // UnhandledPromiseRejectionWarning: ko
    // こういう書き方もできるのか
    // なるほど、await しない場合、Promiseが帰るのか面白いな
    const result2 = asyncFunc(false).catch(err=> {
      console.log(err)
      return asyncFunc(false)
    })
    await result2.catch(err=>console.log(err))
  // } catch (error) {
  //   console.log(error)
  // }
})()
```

# for await of

```javascript
const promise=(num:number, b:boolean)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(num)
      if(b){
        resolve()
      }else{
        reject()
      }
    }, num)
  })
}

(async()=>{
  const array=[1000,2000,3000, 6000]
  for await (const i of array){
    await promise(i, true)
  }
})()

// 直列実行
// 12秒かかる
```

# promiseMap

```
const promiseFunc=(num:number, b:boolean)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(num)
      if(b){
        resolve()
      }else{
        reject()
      }
    }, num)
  })
}

(async()=>{
  const array=[1000,2000,3000, 6000]
  const result = await Promise.all(array.map(async(num, i)=>{
    await promiseFunc(num, true)
  }))
  console.log(result)
})()

// 並列実行
// 合計６秒かかる
```

色々調べてどう変化してきたのかわかった
