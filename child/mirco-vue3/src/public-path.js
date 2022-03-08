// 动态设置 webpack publicPath，防止资源加载出错
if (window.__POWERED_BY_QIANKUN__) {
  // 下一行注释是为了解决 eslint 报错（'__webpack_public_path__' is not defined）
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}