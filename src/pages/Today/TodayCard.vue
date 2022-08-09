<template>
  <div>
      <div class="card">
         <span>{{dayin.lunar}}</span>
         <br>
         <span>{{dayin.date}}</span>
      </div>
      <ul>
          <ol>当前年月：{{dayin['year-month']}}</ol>
          <ol>今年属相： {{dayin.animalsYear}}</ol>
          <ol>阴历年份：{{dayin.lunarYear}}</ol>
          <ol>今日适宜：{{dayin.suit}}</ol>
          <ol>今日避免：{{dayin.avoid}}</ol>
      </ul>
  </div>
</template>

<script>
import { computed} from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
   name:'TodayCard',
   setup(){
    const store = useStore()
    const state = store.state
    return{
      dayin:computed(()=>state.dayDate)
    }
   }
}
</script>

<style lang="less" scoped>
.card {
    background-color: aqua;
}
</style>