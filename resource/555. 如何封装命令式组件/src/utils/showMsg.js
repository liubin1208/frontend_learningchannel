import { createApp } from 'vue';
import MessageBox from '../components/MessageBox.vue';

export function showMsg(msg, handleClick) {
  const app = createApp(MessageBox, {
    msg,
    onClick: handleClick,
  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  app.mount(div);

  return () => {
    app.unmount();
    document.body.removeChild(div);
  };
}
