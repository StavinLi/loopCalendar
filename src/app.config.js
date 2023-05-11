/*
 * @Author: Stavinli 495727881@qq.com
 * @Date: 2023-04-26 14:53:20
 * @LastEditors: Stavinli 495727881@qq.com
 * @LastEditTime: 2023-05-11 14:46:45
 * @FilePath: /loopCalendar/src/app.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/week/index',
    'pages/month/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/week/index',
        text: '周'
      },
      {
        pagePath: 'pages/month/index',
        text: '月'
      }]
  },
})
