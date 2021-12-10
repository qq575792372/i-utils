### date 的优化方案

1. formatDate(date:String|Date|Timestamp|UnixTimestamp, format='yyyy-MM-dd') => String 用作不同格式的日期格式化为日期格式
2. parseDate(str:String) => Date 日期字符串转为 Date

<!-- 当前天是所在 xxx 的第几天 -->

3. getDayOfWeek(date) 获得当前日期是所在周的第几天，1-7 数字
4. getDayOfMonth(date) 获得当前日期是所在月份的第几天
5. getDayOfYear(date) 获得当前日期是所在年份的第几天

<!-- 获得周和月的第一天以及最后一天 -->

7. getFirstDayOfWeek(date) 获得当前日期所在周的第一天
8. getLastDayOfWeek(date) 获得当前日期所在周的最后一天
9. getLastDayOfMonth(date) 获得当前日期所在月份的最后一天

<!-- 当前周是所在 xxx的第几周 -->

10. getWeekOfMonth(date) 获得当前日期是所在月份的第几周
11. getWeekOfYear(date) 获得当前日期是所在年份的第几周

12. getPastTimeStr(date) 获得过去时间的字符串显示，替换之前的名称
13. isAM(date) 是否是上午
14. isPM(date) 是否是下午
15. isWeekend(date) 是否是周末（周六或周日）

<!-- 比较同一天，月，年 -->

15. isSameDay(date1,date2) 比较两个日期是否是同一天
16. isSameMonth(date1,date2) 比较两个日期是否是同一个月
17. isSameYear(date1,date2) 比较两个日期是否是同一年

<!-- 获得相差 年，月，日 ，两个日期之间的数组 -->

18. betweenDays (date1,date2) 获得两个日期相差天数数组
19. betweenMonths(date1,date2) 获得两个日期相差月数数组
20. betweenYears(date1,date2) 获得两个日期相差年数数组

<!-- 计算两个年，月，日 的日期之间差 -->

21. diffDay(date1,date2) 计算两个日期相差的天数
22. diffWeek(date1,date2) 计算两个日期相差的周数，不满一周为 0
23. diffMonth(date1,date2) 计算两个日期相差的月数，不满一个月为 0
24. diffYear(date1,date2) 计算两个日期相差的年数，不满一年为 0

25. 获得指定年月的总天数
26. 获得指定年份的总天数（需要看是闰年还是平年）
27. 日期，年月日时分秒加减 的名称，是用 addXXX，还是 offsetXXX，考虑一下

<!-- 简易时间偏移 -->

28. yesterday() 昨天
29. today() 今天
30. prevWeek() 上周（7 天前）
31. nextWeek() 下周（7 天后）
32. prevMonth() 上个月（30 天前）
33. nextMonth() 下个月（30 天后）
34. prevYear() 去年（365 天前）
35. nextYear() 明年（365 天后）

<!-- 生肖，星座 -->

33. getChineseZodiac(dateStr) 通过生日计算生肖

34. getZodiac(dateStr) 通过生日计算星座
