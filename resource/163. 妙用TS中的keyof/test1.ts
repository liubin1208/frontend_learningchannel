interface Point {
  x: number;
  y: number;
  z: number;
}

// 定义一个类型，它必须是Point的键之一
type keys = keyof Point;

const k: keys = 'x';
