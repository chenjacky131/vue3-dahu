<template>
  <div class="home">
    <h3>当前监控代币</h3>
    <div class="coint-list">
      BTC、ETH、
    </div>
    <van-button type="default" size="small" @click="addCoin">添加代币</van-button>
    <h3>条件筛选</h3>
    <van-row class="search-form">
      <van-col span="12">
        <van-row>大户持有当前代币价值条件</van-row>
        <van-radio-group v-model="searchName" direction="horizontal">
          <van-row justify="space-between">
            <van-col span="12">
              <van-radio name="money" shape="square">持有金额</van-radio>
            </van-col>
            <van-col span="12">
              <van-radio name="amount" shape="square">持有数量</van-radio>
            </van-col>
          </van-row>                               
        </van-radio-group>
        <van-row>
          <input type="text" :name="searchName" placeholder="请输入">
        </van-row>
      </van-col>
      <van-col span="12">
        <van-row>时间选择</van-row>
        <van-row>
          <input type="text" placeholder="请输入" @click="showTimePicker = true" :value="timeRange">
          <van-calendar v-model:show="showTimePicker" type="range" @confirm="onConfirmTimePicker" />
        </van-row>
      </van-col>
    </van-row>
    <h3>查询列表</h3>
    <van-row>
      <van-col span="12"><span>分组</span> <span class="input" @click="showGroup = true">{{groupValue}} <van-icon name="arrow-down" /></span>        
      </van-col>
      <van-col span="12">资金排序 <van-icon name="play" class="icon-sort" /></van-col>
    </van-row>
    <van-popup v-model:show="showGroup" round position="bottom">
      <van-picker
        :columns="groupOptions"
        @cancel="showGroup = false"
        @confirm="onConfirmPicker"
      />
    </van-popup>
    <van-list class="data-list"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in dataList" :key="item">
        <template #value>
          <van-row>
            {{item}}、地址：0x16513123123123132151565132133213312
          </van-row>        
          <van-row>
            <van-col span="12">
              总收益: <span class="color-red font-strong">140%</span>
            </van-col>
            <van-col span="12">
              标签: <span>疑似大户</span>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="12">
              总资金: <span class="color-red font-strong">13213213213U</span>
            </van-col>
            <van-col span="12" class="text-right">
              <van-button plain type="success" size="small" @click="dahuDetail">查看详情</van-button>
            </van-col>
          </van-row>          
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
export default {
  name:'home',
 setup(){
   const router = useRouter()
   const state = reactive({
     searchName: 'money',
     showTimePicker: false,
     timeRange: '',
     showGroup: false,
     groupOptions:['全部','BTC','ETH'],
     groupValue:'全部',
     loading: false,
     finished: false,
     dataList:[]
   })
  const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
  const onConfirmTimePicker = (values) => {
    const [start, end] = values;
    state.showTimePicker = false;
    state.timeRange = `${formatDate(start)} - ${formatDate(end)}`;
  };
  const onConfirmPicker = (value) => {
    state.groupValue = value;
    state.showGroup = false;
  };
  const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    // state.loading = false
    // state.finished = true
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        state.dataList.push(state.dataList.length + 1);
      }

      // 加载状态结束
      state.loading = false;

      // 数据全部加载完成
      if (state.dataList.length >= 40) {
        state.finished = true;
      }
    }, 1000);
  };
  const addCoin = () => {
    router.push({
      path:'/addCoin'
    })
  }
  const dahuDetail = () => {
    router.push({
      path:'/dahuDetail'
    })
  }
   return {
     ...toRefs(state),
     onConfirmTimePicker,
     onConfirmPicker,
     onLoad,
     addCoin,
     dahuDetail
   }
 }
}
</script>
<style lang="scss" scoped>
.home{
  padding: 10px;
  h3{
    &:first-of-type{
      margin-top: 0;
    }
  }
  .coint-list{
    margin-bottom: 10px;
  }
  .search-form{
    :deep(.van-radio-group){
      .van-radio__label{
        white-space: nowrap;
        margin-left: 2px;
      }      
    }
    input[type="text"]{
      width: 100%;
    }
  }
  .icon-sort{
    transform: rotate(90deg);
  }
  .data-list{
    :deep(.van-cell){
      padding: 10px 0 0;
      .van-row{
        white-space: nowrap;
      }
    }
  }
}
</style>