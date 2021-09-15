<template>
  <div class="add-coin">
    <van-nav-bar
      title="添加代币"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <van-cell-group inset>
        <van-field v-model="url" label="合约地址" placeholder="请输入合约地址" />
        <van-field v-model="pre" label="代币精度" placeholder="请输入代币精度" />
        <van-field v-model="addressAmount" label="地址数" placeholder="请输入地址数" />
      </van-cell-group>
      <van-row>
        <van-button type="primary" block>确定</van-button>
      </van-row>      
    </div>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {reactive, toRefs} from 'vue'
export default {
  setup(){
    const state = reactive({
      url:'',
      pre:'',
      addressAmount:''
    })
    const router = useRouter()
    const onClickLeft = () => {
      router.back()
    }
    return {
      ...toRefs(state),
      onClickLeft
    }
  }
}
</script>
<style lang="scss" scoped>
.add-coin{
  .content{
    padding: 10px;
  }
}
</style>