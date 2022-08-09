<template>
  <div>
      <h2>当天信息详情</h2>
     <TodayCard></TodayCard>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted} from 'vue'
import getData from '@/api'
import {getnewDate} from '../../service/tool'
import TodayCard from './TodayCard.vue'

export default {
    name:'Today',
    components:{
      TodayCard
    },
    setup(){
      const store = useStore()
     onMounted(()=>{
       getData(store,'day',getnewDate('day'))
     })
    }
    
}
</script>

<style>

</style>