// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 引入 qiankun 注册微应用方法
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun';
// 引入微应用信息
import apps from './apps.js'

// 注册微应用
registerMicroApps(apps, {
  beforeLoad(app) {
    console.log(123123)
    // 加载微应用前，显示进度条
    NProgress.start()
    console.log('before load', app.name)
  },
  afterMount(app) {
    // 微应用加载完成，隐藏进度条
    NProgress.done()
    console.log('before load', app.name)
  }
});

// 添加全局未捕获异常处理器
addGlobalUncaughtErrorHandler(event => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    alert("微应用加载失败，请检查应用是否可运行");
  }
})

export default start