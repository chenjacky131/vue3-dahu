<template>
  <div class="router-view-wrap">
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
.router-view-wrap{
  font-size: 14px;
  :deep(.van-row){
    margin-bottom: 10px;
  }  
  :deep(.input){
    height: 22px;
    border: 1px solid #767676;
    border-radius: 2px;
    width: 80px;
    display: inline-block;
    text-align: center;
    line-height: 22px;
  }
  :deep(div){
    .color-red{
      color: red;      
    }
    .font-strong{
      font-size: 16px;
      font-weight: bold;
    }
    .text-right{
      text-align: right;
    }
  }
}
</style>>