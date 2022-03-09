import { createApp, App } from 'vue'
import myApp from './App.vue'
import routes from './routes'
import { createRouter, createWebHistory, Router } from "vue-router";

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: string;
  }
}

interface IRenderProps {
  container: Element|string;
}

let router: Router;
let instance: App<Element>;

function render(props: IRenderProps) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/mircoVue3TS' : '/'),
    routes
  })

  instance = createApp(myApp);
  instance.use(router);
  instance.mount(typeof(container) === 'string' ? container : (container.querySelector("#app") as Element));
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" });
}

//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log("vue3ts bootstraped");
}

export async function mount(props: any) {
  console.log("mount vue3ts");
  render(props);
}

export async function unmount() {
  console.log("unmount vue3ts");
  instance.unmount();
}
