<template>
  <div class="header">
    <span>{{headerTitle}}</span>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  name: "Header",
  setup() {
   const store = useStore() 
    return {
        headerTitle:computed(()=>store.state.headerTitle)
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: antiquewhite;
  margin-top:20px;
  span {
      font-size: 20px;
   }
}
</style>