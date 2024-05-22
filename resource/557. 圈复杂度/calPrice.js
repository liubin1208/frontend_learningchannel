export function calPrice(user, products) {
  switch (user.identity) {
    case 'super vip':
      if (user.level < 2) {
        // do something
      } else {
        // do something
      }
      break;
    case ' vip':
      if (user.level < 4) {
        // do something
      } else {
        // do something
      }
      break;
    case 'new':
      if (user.level < 2) {
        // do something
      } else {
        // do something
      }
      break;
    case 'invited':
      if (user.level < 3) {
        // do something
      } else if (products.length < 10) {
        // do something
      } else {
        // do something
      }
      break;
    default:
      if (user.level < 3) {
        // do something
      } else {
        // do something
      }
  }
}
