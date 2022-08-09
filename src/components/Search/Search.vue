<template>
<div>
    <input type="text" 
    :placeholder="placeholderText" 
    v-model="searchText" 
    :maxlength="maxlength"
    @input="onSearch"
    >
    
</div>
</template>

<script>
import { computed, watch ,ref ,onMounted} from '@vue/runtime-core'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {getnewDate} from '../../service/tool'
import getData from '@/api'

export default { 
   name:'Search',
   setup(){
       const router = useRouter()
       const store = useStore()
       const state = store.state
       const searchText = ref('')
       console.log(searchText)
       onMounted(()=>{
         store.commit('setsearchText',getnewDate('day'))
       })
      function onSearch(){
        store.commit('setsearchText',searchText.value)
        switch(state.searchText.length){
          case 8:
            getData(store,'day',state.searchText)
            break;
          case 6:
            getData(store,'recent',state.searchText)
            break;
          case 4:
            getData(store,'year',state.searchText)
            break;
          default:
            break;
        }

        searchText.value = ''
      }
     watch(()=>{
         return router.currentRoute.value.name
     },(value)=>{
       store.commit('changeplaceholderText',value)
     })

     return{
         placeholderText:computed(()=>store.state.placeholderText),
         searchText,
         onSearch
     }
}
}
</script>

<style lang="less" scoped>
input {
  width: 300px;
}
</style>