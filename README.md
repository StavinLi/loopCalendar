# loopCalendar
Taro无线循环周月

### 「扫描体验」
![gh_6b4baa38f9bf_258.jpg](https://wos.58cdn.com.cn/IjGfEdCbIlr/ishare/9366b57f-89c2-4bdf-a6a8-db95832962b4gh_6b4baa38f9bf_258.jpg)

### 「原理」
> 利用`swiper`循环滚动，依靠索引`slideIndex`,动态处理数据

### 「代码实现」
```
<swiper :current="current" :circular="true" @change="handleSlide">
   <swiper-item v-for="(item, index) in weeksT" :key="index">
	...
   </swiper-item>
</swiper>

const current = ref(1)
const weekIndexs = ref([-1, 0, 1]);

// getWeekDays为获取周详情
// selectedDate为当前选择日
const weeks = computed(() => {
    return weekIndexs.value.map((item) => getWeekDays(item, selectedDate.value));
});
const handleSlide = ({ detail: { current } }) => {
    const curVal = weekIndexs.value[current];
    if (current === 0) {
        weekIndexs.value = [curVal, curVal + 1, curVal - 1];
    } else if (current === 1) {
        weekIndexs.value = [curVal - 1, curVal, curVal + 1];
    } else {
        weekIndexs.value = [curVal + 1, curVal - 1, curVal];
    }
};
```
### 「git地址」
[https://github.com/StavinLi/loopCalendar](https://github.com/StavinLi/loopCalendar)
