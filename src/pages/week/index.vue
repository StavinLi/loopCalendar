<!--
 * @Author: Stavinli 495727881@qq.com
 * @Date: 2023-04-26 15:04:12
 * @LastEditors: Stavinli 495727881@qq.com
 * @LastEditTime: 2023-05-11 12:23:01
 * @FilePath: /loopCalendar/src/pages/list/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEe
-->
<template>
  <div class="week">
    <h3>{{ curMonth.$y }}年{{ curMonth.$M + 1 }}月</h3>
    <ul>
          <li
            v-for="(elem, i) in weekName"
            :key="i"
            class="cell date"
          >
            <p>{{ elem }}</p>
          </li>
        </ul>
    <swiper
      class="swiper"
      :current="current"
      :circular="true"
      @change="handleSlide"
    >
      <swiper-item v-for="(item, index) in weeksT" :key="index">
        <ul>
          <li
            v-for="(elem, i) in item"
            :key="i"
            class="cell date"
            :class="{
              active: elem.isActive,
            }"
          >
            <p>{{ elem.dateT }}</p>
            <span v-if="elem.showMonth" class="brand">{{ elem.m }}月</span>
            <p>{{elem.lunar.festivalName|| elem.lunar.Term || elem.lunar.IDayCn }}</p>
          </li>
        </ul>
      </swiper-item>
    </swiper>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import dayjs from 'dayjs';
import { getWeekDays, getWeek} from '@/utils/common';
import { weekName } from '@/utils/const';
import './index.scss'
// 周list
const date = dayjs().format('YYYY-MM-DD');
const selectedDate = ref(date);
const slideIndex = ref(1); // 当前slide索引
const current = ref(1)
const weekIndexs = ref([-1, 0, 1]);
const curMonth = computed(() => {
    return getWeek(weekIndexs.value[slideIndex.value], selectedDate.value).start;
});
const weeks = computed(() => {
    return weekIndexs.value.map((item) => getWeekDays(item, selectedDate.value));
});
let curDay = dayjs().format('d')
const weeksT = computed(() => {
    return weeks.value.map((week) => {
        return week.map((item, index) => {
            return {
                ...item,
                isActive: (curDay - index) === 1,
                dateT: date === item.date ? '今' : item.d,
                showMonth: item.d === 1,
            };
        });
    });
});

const handleSlide = ({ detail: { current } }) => {
    const curVal = weekIndexs.value[current];
    slideIndex.value = current;
    if (current === 0) {
        weekIndexs.value = [curVal, curVal + 1, curVal - 1];
    } else if (current === 1) {
        weekIndexs.value = [curVal - 1, curVal, curVal + 1];
    } else {
        weekIndexs.value = [curVal + 1, curVal - 1, curVal];
    }
};

</script>