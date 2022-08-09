<template>
   <div>
   <Header></Header>
   <Search></Search>
   <router-view></router-view>
   <Tabbar></Tabbar>
   </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Search from './components/Search/Search.vue'
import Tabbar from './components/Tabbar/Tabbar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Tabbar
  }
}
</script>

<style>

</style>
