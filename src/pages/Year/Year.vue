<template>
  <div>
      <h2>今年节假日</h2>
      <YearList :data="yearin"></YearList>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted,computed} from 'vue'
import {getnewDate} from '../../service/tool'
import getData from '@/api'
import YearList from './YearList.vue'

export default {
    name:'Year',
    components:{
      YearList
    },
    setup(){
      const store = useStore()
      const state = store.state
      onMounted(()=>{
        getData(store,'year',getnewDate('year'))
      })
      return{
       yearin: computed(()=>state.yearDate)
      }
    }
}
</script>

<style>

</style>