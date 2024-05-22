/**
 * 插牌算法
 * @param {number[]} cards
 * @param {number} takeNumber
 * @param {number} topNumber
 */
function insertCard(cards, takeNumber, topNumber) {
  if (takeNumber <= 0 || takeNumber > cards.length - 2) {
    return;
  }
  const restCount = cards.length - takeNumber;
  if (topNumber < 1 || topNumber > restCount - 1) {
    return;
  }
  const temp = [];
  for (let i = 0; i < topNumber; i++) {
    temp.push(cards[i]);
    cards[i] = cards[i + takeNumber];
  }
  let index = 0;
  for (let i = topNumber; i < topNumber + takeNumber; i++) {
    const tempCard = cards[i];
    cards[i] = temp[index];
    temp[index] = tempCard;
    index = (index + 1) % topNumber;
  }
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
insertCard(cards, 3, 4);
console.log(cards);
