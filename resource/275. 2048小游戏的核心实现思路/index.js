const matrix = [
  [0, 2, 2, 0],
  [0, 0, 2, 2],
  [2, 4, 4, 2],
  [2, 4, 4, 4],
];
Array.prototype.print = function () {
  console.log(this.map((item) => item.join(' ')).join('\n'));
};
move(matrix, 'down');
matrix.print();

function move(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function _inRange(i, j) {
    return matrix[i] && matrix[i][j] !== undefined;
  }

  const next = {
    up: (i, j) => [i + 1, j],
    down: (i, j) => [i - 1, j],
    left: (i, j) => [i, j + 1],
    right: (i, j) => [i, j - 1],
  };

  function _getNextNonZeroValue(i, j) {
    let [nextI, nextJ] = next[direction](i, j);
    while (_inRange(nextI, nextJ)) {
      const nextValue = matrix[nextI][nextJ];
      if (nextValue) {
        return [nextI, nextJ, nextValue];
      } else {
        [nextI, nextJ] = next[direction](nextI, nextJ);
      }
    }
  }

  function _cal(i, j) {
    if (!_inRange(i, j)) {
      return;
    }
    // 计算出这个位置的值
    const result = _getNextNonZeroValue(i, j);
    if (!result) {
      return;
    }
    const [nextI, nextJ, nextValue] = result;
    if (matrix[i][j] === 0) {
      matrix[i][j] = nextValue;
      matrix[nextI][nextJ] = 0;
      _cal(i, j);
    } else if (matrix[i][j] === nextValue) {
      matrix[i][j] += nextValue;
      matrix[nextI][nextJ] = 0;
    }

    // 计算下一个位置的值
    _cal(...next[direction](i, j));
  }

  if (direction === 'up') {
    for (let j = 0; j < cols; j++) {
      _cal(0, j);
    }
  } else if (direction === 'down') {
    for (let j = 0; j < cols; j++) {
      _cal(rows - 1, j);
    }
  } else if (direction === 'left') {
    for (let i = 0; i < rows; i++) {
      _cal(i, 0);
    }
  } else {
    for (let i = 0; i < rows; i++) {
      _cal(i, cols - 1);
    }
  }
}
