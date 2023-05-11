import dayjs from 'dayjs';
import calendar from 'solarday2lunarday'
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

/**
 * 序列化对象
 * @param {*} obj
 * @returns
 */
export const serializeJson = (obj) => {
    const arr = [];
    Object.keys(obj).forEach((v) => {
        arr.push(`${encodeURIComponent(v)}=${obj[v]}`);
    });
    return arr.join('; ');
};

export const getWeek = (index = 0, date) => {
    return {
        start: dayjs(date).isoWeekday(1 + 7 * index),
        days: dayjs(date)
            .isoWeekday(1 + 7 * index)
            .daysInMonth(),
        end: dayjs(date).isoWeekday(7 + 7 * index)
    };
};

export const getWeekDays = (index = 0, date) => {
    const {
        start,
        start: { $D: startD, $M: startM },
        days,
        end,
        end: { $D: endD, $M: endM }
    } = getWeek(index, date);
    const list = [];
    const endFlag = startM === endM ? endD : days;
    for (let i = startD; i <= endFlag; i++) {
        let date = start.date(i).format('YYYY-MM-DD')
        list.push({
            d: i,
            m: startM + 1,
            date,
            lunar: calendar.solar2lunar(date)
        });
    }
    if (startM !== endM) {
        for (let i = 1; i <= endD; i++) {
            let date = end.date(i).format('YYYY-MM-DD')
            list.push({
                d: i,
                m: endM + 1,
                date,
                lunar: calendar.solar2lunar(date)
            });
        }
    }
    return list;
};
export const getMonth = (index = 0, date) => {
    const month = dayjs(date).add(index, 'month');
    const days = Array.from({ length: month.daysInMonth() }, (_, i) => {
        return dayjs(month)
            .date(1 + i)
            .format('YYYY-MM-DD');
    });
    return {
        start: dayjs(month).date(1).day(),
        days,
        text: dayjs(month).format('YYYY年 MM月'),
        month: dayjs(month).format('YYYY-MM')
    };
};