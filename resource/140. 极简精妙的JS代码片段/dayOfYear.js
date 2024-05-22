// 获取某个日期位于当年的第几天
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// test
dayOfYear(new Date(2022, 10, 27)); // 331
