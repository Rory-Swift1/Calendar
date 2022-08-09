<template>
   <div>
  <div>假期名称:{{monthin.name}}</div>
  <div>假期时间:{{monthin.desc}}</div>
  </div>
</template>

<script>

export default {
    name:'RecentItem',
    props:['item'],
    setup(props){
    let monthin = props.item
    return{
        monthin
    }
    }
}
</script>

<style>

</style>