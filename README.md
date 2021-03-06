# 项目说明 mirco-frontends-demo

基于 qiankun 框架构架的微前端 demo。

## 1. 目录结构

```sh
├── child                       # 子应用文件夹
│   ├── mirco-vue3              # vue-cli 构建 vue3 应用
│   │   ├── src
│   │   │   ├── ...             # 子应用页面、路由等
│   │   │   ├── main.js         # 挂载子应用，并导出 qiankun 所需生命周期钩子
│   │   │   └── public-path.js  # 动态设置 webpack publicPath
│   │   ├── package.json        # 子应用依赖
│   │   └── vue.config.js       # 子应用 webpack 配置
│   ├── mirco-vue3-ts           # vite 构建 vue3 + ts 应用
│   │   ├── src
│   │   │   ├── ...             # 子应用页面、路由等
│   │   │   └── main.ts         # 挂载子应用，并导出 qiankun 所需生命周期钩子
│   │   ├── package.json        # 子应用依赖
│   │   └── vite.config.js      # 子应用 vite 配置
│   ├── apps.js                 # 子应用注册配置信息
│   └── index.js                # qiankun 注册子应用方法封装
├── src
│   ├── ...                     # 主应用页面、路由等
│   ├── layout                  
│   │   └── Layout.vue          # 主应用布局文件，并为子应用提供挂载 DOM 节点 #container
│   └── main.js                 # 挂载主应用，并启动 qiankun
├── package.json                # 主应用依赖
├── vue.config.js               # 主应用 webpack 配置
```

### 1.1 主应用（使用 vue-cli 构建的 vue2）

项目根目录为主应用，使用 vue-cli 构建的 vue2 项目，端口号为 8080

### 1.2 子应用 mirco-vue3（使用 vue-cli 构建的 vue3）

项目根目录下 `/child/mirco-vue3` 为子应用，使用 vue-cli 构建的 vue3 项目，端口号为 3000

### 1.3 子应用 mirco-vue3-ts（使用 vite 构建的 vue3 + ts）

项目根目录 `/child/mirco-vue3-ts` 为子应用，使用 vite 构建的 vue3 + ts 项目，端口号为 3001

## 2. 运行和打包

### 2.1 运行

1. 执行 `npm i -D npm-run-all` 安装 npm-run-all 插件，方便多个应用的 npm 命令统一执行
2. 执行 `npm run install-all` 对所有应用进行依赖安装
3. 执行 `npm run start-all` 或者 `npm run serve-all` 本地启动所有应用
4. 通过本地 `8080` 端口访问主应用，在主应用中通过侧边菜单栏可访问对应子应用

### 2.2 打包

执行 `npm run build-all` 打包所有应用
