interface ShowMessage {
  (options: object): void;
  (text: string): void;
}

interface Utils {
  // ...others
  showMessage: ShowMessage;
}

const utils: Utils = {
  showMessage(options: object | string) {},
};
utils.showMessage();
