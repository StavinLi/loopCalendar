/*
 * @Author: Stavinli 495727881@qq.com
 * @Date: 2023-04-26 14:53:20
 * @LastEditors: Stavinli 495727881@qq.com
 * @LastEditTime: 2023-05-11 10:30:18
 * @FilePath: /loopCalendar/src/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import '@/styles/reset.scss';
const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
