<template>
  <div>
      <h2>近期假期</h2>
      <br>
        <RecentItem v-for="item in monthdate" :key="item.list_num" :item="item"></RecentItem>
  </div>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import {getnewDate} from '../../service/tool'
import getData from '@/api'
import RecentItem from './RecentItem.vue'

export default {
    name:'Recent',
    components:{
        RecentItem
    },
    setup(){
      const store = useStore()
      //在组件挂载完成时，通过getData这个函数来发请求，获取数据，并把相应的数据
      //保存到store上面去
      //挂载的时候，我们需要展示最新日期的数据
      //所以通过getnewDate来获取新的日期，并转换成发请求需要的格式
      onMounted(()=>{
        getData(store,'recent',getnewDate('recent'))
      })
      return {
        monthdate:computed(()=>store.state.monthDate)
      }
    }
}
</script>

<style>

</style>