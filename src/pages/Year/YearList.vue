<template>
  <div class="year_list">
          <div v-for="item in data" :key="item.name">
              <div>节日：{{item.name}}</div>
              <div>时间：{{item.startday}}</div>
              <br>
          </div>
   </div>
</template>

<script>
export default {
      name:'YearList',
      props:{
          data:Object
      },
      setup(props){
       const data = props.data
       console.log(data)
       return{
           data
       }
      }
}
</script>

<style lang="less" scoped>
 .year_list{
     background-color: hotpink;
 }
</style>