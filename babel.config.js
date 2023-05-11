/*
 * @Author: Stavinli 495727881@qq.com
 * @Date: 2023-04-26 14:53:20
 * @LastEditors: Stavinli 495727881@qq.com
 * @LastEditTime: 2023-05-11 14:45:11
 * @FilePath: /loopCalendar/babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: false
    }]
  ]
}
