const BLACK = 1;
const WHITE = 2;

function isValid(board, point, color) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const [i, j] = point;
  return i >= 0 && i < ROWS && j >= 0 && j < COLS && board[i][j] === color;
}

function createJudgement(p1Movement, p2Movement) {
  return function (board, point, color) {
    let count = 1;
    let p1 = p1Movement(point);
    let p2 = p2Movement(point);
    while (1) {
      let p1Changed = false,
        p2Changed = false;
      if (isValid(board, p1, color)) {
        count++;
        p1 = p1Movement(p1);
        p1Changed = true;
      }
      if (isValid(board, p2, color)) {
        count++;
        p2 = p2Movement(p2);
        p2Changed = true;
      }
      if (count >= 5) {
        return true;
      }
      if (!p1Changed && !p2Changed) {
        return false;
      }
    }
  };
}

const horJudgement = createJudgement(
  ([i, j]) => [i, j - 1],
  ([i, j]) => [i, j + 1]
);
const verJudgement = createJudgement(
  ([i, j]) => [i - 1, j],
  ([i, j]) => [i + 1, j]
);
const slashJudgement = createJudgement(
  ([i, j]) => [i + 1, j - 1],
  ([i, j]) => [i - 1, j + 1]
);
const backslashJudgement = createJudgement(
  ([i, j]) => [i - 1, j - 1],
  ([i, j]) => [i + 1, j + 1]
);

function isWin(board, point, color) {
  return (
    horJudgement(board, point, color) ||
    verJudgement(board, point, color) ||
    slashJudgement(board, point, color) ||
    backslashJudgement(board, point, color)
  );
}
