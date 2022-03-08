import { createApp } from 'vue'
import App from './App.vue'
import './public-path';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

let router = null;
let instance = null;

function render(props = {}) {
  
  const { container } = props;

  // vue-router4 创建路由对象
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/mircoVue3/' : '/'),
    routes,
  });

  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  // vue3 中使用 unmount 取消挂载，vue2使用 $destroy
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
}