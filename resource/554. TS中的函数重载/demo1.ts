// 函数声明
function message(options: object): void;
function message(text: string, onClose?: Function): void;
function message(text: string, mode: string, duration?: number): void;
function message(text: string, duration?: number, onClose?: Function): void;
function message(
  param1: string | object,
  param2?: number | Function | string,
  param3?: Function | number
): void {
  // Function implementation goes here
}

// 函数调用

message({
  mode: 'mode',
  text: 'text',
  onClose: function () {},
  duration: 3000,
});
message('text');
message('text', function () {});
message('text', 'mode');
message('text', 'mode', 3000);
message('text', 3000);
message('text', 3000, function () {});

export default {};
