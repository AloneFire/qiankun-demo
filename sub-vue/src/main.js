import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueRouter from 'vue-router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


// 声明变量管理vue及路由实例
let instance = null;

// 导出子应用生命周期 挂载前
export async function bootstrap(props) {
    console.log(props)
}

// 导出子应用生命周期 挂载前 挂载后
/**注意，实例化路由时，判断当运行在qiankun环境时，路由要添加前缀，前缀与主应用注册子应用函数genActiveRule("/aaa")内的参数一致**/
export async function mount(props) {
  console.log(props)
  console.log(window.__POWERED_BY_QIANKUN__ ? "/vue" : "/")
  console.log(router.options.routes)

  // let nrouter = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  //   mode: "history",
  //   routes: router.routes
  // });

  instance = new Vue({
    router,
    // store,
    render: h => h(App)
  }).$mount("#app");
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance = null;
  // router = null;
}

// 生命周期
// export async function bootstrap() {
//   console.log('[vue] vue app bootstraped');
// }
// export async function mount(props) {
//   console.log('[vue] props from main framework', props);
//   // storeTest(props);
//   render(props);
// }
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
//   router = null;
// }


// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();