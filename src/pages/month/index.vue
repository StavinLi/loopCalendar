<!--
 * @Author: Stavinli 495727881@qq.com
 * @Date: 2023-04-26 15:04:12
 * @LastEditors: Stavinli 495727881@qq.com
 * @LastEditTime: 2023-05-11 12:26:44
 * @FilePath: /loopCalendar/src/pages/list/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEe
-->
<template>
  <div class="month">
    <h3>{{ curMonth.text}}</h3>
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
      <swiper-item v-for="(item, index) in monthsT" :key="index">
        <ul>
        <template v-if="item.start!==0">
          <li
            v-for="(i) in item.start-1"
            :key="i"
          >
          </li>
        </template>
          
          <li
            v-for="(elem, i) in item.days"
            :key="i"
          >
            <p>{{ i+1}}</p>
            <p>{{getLunar(elem)}}</p>
          </li>
        </ul>
      </swiper-item>
    </swiper>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import dayjs from 'dayjs';
import calendar from 'solarday2lunarday'
import { getMonth} from '@/utils/common';
import { weekName } from '@/utils/const';
import './index.scss'
// 周list
const date = dayjs().format('YYYY-MM-DD');
const selectedDate = ref(date);
const slideIndex = ref(1); // 当前slide索引
const current = ref(1)
const monthIndexs = ref([-1, 0, 1]);
const curMonth = computed(() => {
    return monthsT.value[slideIndex.value];
});
const months = computed(() => {
    return monthIndexs.value.map((item) => getMonth(item, selectedDate.value));
});

const monthsT = computed(() => {
    return months.value
});

const handleSlide = ({ detail: { current } }) => {
    const curVal = monthIndexs.value[current];
    slideIndex.value = current;
    if (current === 0) {
        monthIndexs.value = [curVal, curVal + 1, curVal - 1];
    } else if (current === 1) {
        monthIndexs.value = [curVal - 1, curVal, curVal + 1];
    } else {
        monthIndexs.value = [curVal + 1, curVal - 1, curVal];
    }
};
const getLunar = (data)=>{
  let { festivalName, Term, IDayCn } = calendar.solar2lunar(data)
  return festivalName || Term || IDayCn 
}
</script>
