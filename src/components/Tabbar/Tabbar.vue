<template>
  <div>
      <button @click="gotoday">当天</button>
      <button @click="gorecent">近期</button>
      <button @click="goyear">当年</button>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    name:'Tabbar',
    setup(){
      const store = useStore()
      const router= useRouter()

      watch(()=>{
        return router.currentRoute.value.name
        },(value)=>{
          store.commit('changeheaderTitle',value)
        }
        )
      function gotoday() {
        router.push({path:'/today'})
      }
            function gorecent() {
        router.push({path:'/recent'})
      }
            function goyear() {
        router.push({path:'/year'})
      }
      
      return{
        gotoday,
        gorecent,
        goyear
      }
    }
}
</script>

<style>

</style>