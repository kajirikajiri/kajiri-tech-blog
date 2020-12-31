---
title: reactで空のactを実行したらErrorが消えた
description: reactでjestのtest中に発生したエラーを解決する方法を共有します。
date: 2020-12-31T21:57:22.000Z
---
<!-- history area start -->
<details><summary>commit history</summary><div><ol>
<li>2020/12/06 18:39:46 675557a</li>
<li>2020/12/06 18:36:41 7d563a7</li>
<li>2020/11/28 20:23:13 24afc13</li>
</ol></div></details>
<!-- history area end -->
<!-- toc area start -->
<details><summary>headline</summary><div>

<!-- toc -->

- [Error](#error)
- [解決](#%E8%A7%A3%E6%B1%BA)

<!-- tocstop -->

</div></details>

<!-- toc area end -->

await act(async()=>{})を書いたら、Errorが消えた

書けとErrorに書いてあるが、空のcallbackでいいとは思わなかッタ

## Error

```bash
  console.error
    Warning: An update to TestHook inside a test was not wrapped in act(...).

    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */

    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
        in TestHook
        in Suspense

      13 |         const apps: AppTypes[] = await getApps();
      14 |         setApps(apps);
    > 15 |         setSessionStatus(true);
         |         ^
      16 |       } catch (error) {
      17 |         setApps([])
      18 |         setSessionStatus(false);

      at printWarning (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:120:30)
      at error (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:92:5)
      at warnIfNotCurrentlyActingUpdatesInDEV (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13729:7)
      at dispatchAction (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6405:9)
      at src/scripts/useState/useApps.ts:15:9
      at step (src/scripts/useState/useApps.ts:33:23)
      at Object.next (src/scripts/useState/useApps.ts:14:53)
```

## 解決

```javascript
import {useApps} from '../useApps'
import {renderHook, act} from '@testing-library/react-hooks'
import { getApps } from "../../api/getApps";
jest.mock('../../api/getApps')

test("", async()=>{
  (getApps as jest.Mock).mockReturnValueOnce(Promise.reject())
  const {result, rerender} = renderHook(()=>useApps())
  await act(async()=>{}) // ← add this line
  expect(result.current).toEqual([[], false])
})
test("", async()=>{
  (getApps as jest.Mock).mockReturnValueOnce(Promise.resolve([]))
  const {result} = renderHook(()=>useApps())
  await act(async()=>{}) // ← add this line
  expect(result.current).toEqual([[], true])
})
```




