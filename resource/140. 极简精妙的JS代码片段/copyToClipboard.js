// 复制文本到剪切板
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// test
copyToClipboard('Hello World');
