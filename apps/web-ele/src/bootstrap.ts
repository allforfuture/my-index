import { createApp } from 'vue';

import { registerAccessDirective } from '@vben/access';
import { initStores } from '@vben/stores';
import '@vben/styles';
import '@vben/styles/ele';

import ElementPlus from 'element-plus';

import { setupI18n } from '#/locales';
// 引入Element Plus的CSS
import App from './app.vue';
import { router } from './router';

import 'element-plus/dist/index.css';

async function bootstrap(namespace: string) {
  const app = createApp(App);

  // 安装Element Plus
  app.use(ElementPlus);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 安装权限指令
  registerAccessDirective(app);

  // 配置路由及路由守卫
  app.use(router);

  app.mount('#app');
}

export { bootstrap };
