interface ShowMessage {
  (options: object): void;
  (text: string, onClose?: Function): void;
  (text: string, mode: string, duration?: number): void;
  (text: string, duration?: number, onClose?: Function): void;
}

interface Utils {
  showMessage: ShowMessage;
}

const utils: Utils = {
  showMessage(
    param1: string | object,
    param2?: number | Function | string,
    param3?: Function | number
  ) {},
};
// 函数调用

utils.showMessage({
  mode: 'mode',
  text: 'text',
  onClose: function () {},
  duration: 3000,
});
utils.showMessage('text');
utils.showMessage('text', function () {});
utils.showMessage('text', 'mode');
utils.showMessage('text', 'mode', 3000);
utils.showMessage('text', 3000);
utils.showMessage('text', 3000, function () {});

export default {};
