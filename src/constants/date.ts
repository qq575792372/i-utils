/**
 * 日期
 */
export const DATE: Record<string, any> = {
  // 上午和下午
  AM_PM: {
    zh: {
      AM: "上午",
      PM: "下午",
    },
    en: {
      AM: "AM",
      PM: "PM",
    },
  },
  // 周
  WEEK: {
    zh: {
      FULL: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      SHORT: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      MINI: ["日", "一", "二", "三", "四", "五", "六"],
    },
    en: {
      FULL: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      SHORT: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      MINI: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
  },

  // 月
  MONTH: {
    zh: {
      FULL: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      SHORT: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    },
    en: {
      FULL: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      SHORT: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  },
  // 季度
  QUARTER: {
    zh: {
      FULL: ["第一季度", "第二季度", "第三季度", "第四季度"],
      SHORT: ["一季度", "二季度", "三季度", "四季度"],
      MINI: ["一", "二", "三", "四"],
    },
    en: {
      FULL: ["quarter 1st", "quarter 2nd", "quarter 3rd", "quarter 4th"],
      SHORT: ["Q1th", "Q2nd", "Q3rd", "Q4th"],
      MINI: ["Q1", "Q2", "Q3", "Q4"],
    },
  },

  // 已过日期类型
  OVER_TIME: {
    zh: {
      YEAR: "年",
      MONTH: "月",
      DATE: "日",
      HOUR: "时",
      MINUTE: "分",
      SECOND: "秒",
      MILLISECOND: "毫秒",
      DAY: "天",
      QUARTER: "季度",
    },
    en: {
      YEAR: "year",
      MONTH: "month",
      DATE: "date",
      HOUR: "hour",
      MINUTE: "minute",
      SECOND: "second",
      MILLISECOND: "millisecond",
      DAY: "day",
      QUARTER: "quarter",
    },
  },

  // 时间节点
  PASS_TIME: {
    zh: {
      YEAR: "年前",
      MONTH: "个月前",
      DAY: "天前",
      BEFORE_YESTERDAY: "前天",
      YESTERDAY: "昨天",
      TODAY: "今天",
      HOUR: "小时前",
      MINUTE: "分钟前",
      JUST: "刚刚",
    },
    en: {
      YEAR: " year ago",
      MONTH: " month ago",
      DAY: " day ago",
      BEFORE_YESTERDAY: "before yesterday",
      YESTERDAY: " yesterday",
      TODAY: " today",
      HOUR: " hour ago",
      MINUTE: " minute ago",
      JUST: " just",
    },
  },

  // 节假日
  HOLIDAY: {
    zh: ["元旦", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节"],
    en: [
      "New Year‘s Day",
      "Spring Festival",
      "Tomb Sweeping Day",
      "Labor Day",
      "Dragon Boat Festival",
      "Mid-Autumn Day",
      "National Day",
    ],
  },

  // 星座

  ZODIAC: {
    zh: [
      "摩羯座",
      "水瓶座",
      "双鱼座",
      "白羊座",
      "金牛座",
      "双子座",
      "巨蟹座",
      "狮子座",
      "处女座",
      "天秤座",
      "天蝎座",
      "射手座",
    ],
    en: [
      "Capricorn",
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
    ],
  },

  // 生肖
  CHINESE_ZODIAC: {
    zh: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    en: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
  },

  // 天干地支
  HEAVENLY_STEMS: {
    zh: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    en: ["Jia", "Yi", "Bing", "Ding", "Wu", "Ji", "Geng", "Xin", "Ren", "Gui"],
  },
  EARTHLY_BRANCHES: {
    zh: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    en: ["Zi", "Chou", "Yin", "Mao", "Chen", "Si", "Wu", "Wei", "Shen", "You", "Xu", "Hai"],
  },
} as const;
