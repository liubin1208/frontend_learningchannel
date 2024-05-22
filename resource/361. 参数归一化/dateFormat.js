function _formatNormalize(formatter) {
  if (typeof formatter === 'function') {
    return formatter;
  }
  if (typeof formatter !== 'string') {
    throw new TypeError('formatter must be string or function');
  }
  if (formatter === 'date') {
    formatter = 'yyyy-MM-dd';
  } else if (formatter === 'datetime') {
    formatter = 'yyyy-MM-dd HH:mm:ss';
  }
  return (dateInfo) => {
    const { yyyy, MM, dd, HH, mm, ss, ms } = dateInfo;
    return formatter
      .replace('yyyy', yyyy)
      .replace('MM', MM)
      .replace('dd', dd)
      .replace('HH', HH)
      .replace('mm', mm)
      .replace('ss', ss)
      .replace('ms', ms);
  };
}

/**
 * 格式化一个日期
 * @param {Date} date 日期对象
 */
function formate(date, formatter, isPad = false) {
  formatter = _formatNormalize(formatter);
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  };
  dateInfo.yyyy = isPad
    ? dateInfo.year.toString().padStart(4, '0')
    : dateInfo.year;
  dateInfo.MM = isPad
    ? dateInfo.month.toString().padStart(2, '0')
    : dateInfo.month;
  dateInfo.dd = isPad
    ? dateInfo.date.toString().padStart(2, '0')
    : dateInfo.date;
  dateInfo.HH = isPad
    ? dateInfo.hours.toString().padStart(2, '0')
    : dateInfo.hours;
  dateInfo.mm = isPad
    ? dateInfo.minutes.toString().padStart(2, '0')
    : dateInfo.minutes;
  dateInfo.ss = isPad
    ? dateInfo.seconds.toString().padStart(2, '0')
    : dateInfo.seconds;
  dateInfo.ms = isPad
    ? dateInfo.milliseconds.toString().padStart(3, '0')
    : dateInfo.milliseconds;
  return formatter(dateInfo);
}

// 可能的调用方式

// 2023-4-6
formate(new Date(), 'date');

// 2023-4-6 14:7:41
formate(new Date(), 'datetime');

// 2023-04-06
formate(new Date(), 'date', true);

// 2023-04-06 14:07:41
formate(new Date(), 'datetime', true);

// 2023年04月06日 14:07:41.336
formate(new Date(), 'yyyy年MM月dd日 HH:mm:ss.ms', true);

// 2023年4月6日 14:7:41.336
formate(new Date('2022/1/1'), (dateInfo) => {
  const { year } = dateInfo;
  const thisYear = new Date().getFullYear();
  if (year < thisYear) {
    return `${thisYear - year}年前`;
  } else if (year > thisYear) {
    return `${year - thisYear}年后`;
  } else {
    return '今年';
  }
});
