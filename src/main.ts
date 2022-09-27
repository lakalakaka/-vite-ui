import { createApp } from 'vue';
import ViteUI from './entry';
import 'uno.css';

createApp({
  template: `
    <div>
    <SButton color="blue">蓝色按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
   </div>
    `
})
  .use(ViteUI)
  .mount('#app');
