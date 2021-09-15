<template>
  <div class="dahu-detail">
    <van-nav-bar
      title="大户详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <h3>大户详情</h3>
      <van-list>
        <van-cell v-for="(item,index) in infoList" :key="index" :title="item.name">
          <template #value>
            <template v-if="item.key === 'label'">
              <van-button type="default" plain size="small">{{item.value}}</van-button> <van-button type="primary" size="small" @click="editLabel">编辑</van-button>
            </template>
            <template v-else-if="item.key === 'ben' || item.key === 'mon'">
              <span class="color-red font-strong">{{item.value}}</span>
            </template>
            <template v-else>
              {{item.value}}
            </template>
          </template>
        </van-cell>
      </van-list>
      <h3>大户持币</h3>
      <van-list class="data-list"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in dataList" :key="item">
          <template #value>
            <van-row>
              <van-col span="12"><span class="font-strong">BTC</span></van-col>
              <van-col span="12" class="text-right">收益: <span class="color-red font-strong">140%</span></van-col>
            </van-row>        
            <van-row>
              <van-col span="12">
                持币数量: <span>121312321</span>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="12">
                总资金: <span>13213213213U</span>
              </van-col>
            </van-row>            
          </template>
        </van-cell>
      </van-list>
    </div>    
    <van-dialog class="label-dialog" v-model:show="showDialog" show-cancel-button>
      <div class="dialog-content">
        <van-button type="default">疑似大户</van-button>
        <van-button type="default">疑似大户</van-button>
        <van-button type="default">疑似大户</van-button>       
        <van-button type="default">疑似大户</van-button>     
        <van-button type="default">疑似大户</van-button>     
        <van-button type="default">疑似大户</van-button>      
      </div>
    </van-dialog>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {reactive, toRefs} from 'vue'
export default {
  setup(){
    const state = reactive({
      infoList:[
        {
          name:'地址',
          key:'add',
          value:'0x16513123123123132151565132133213312'
        },
        {
          name:'大户标签',
          key:'label',
          value:'无'
        },
        {
          name:'总收益',
          key:'ben',
          value:'140%'
        },
        {
          name:'总资产',
          key:'mon',
          value:'13213213213U'
        },
      ],
      loading: false,
      finished: false,
      dataList:[],
      showDialog: false
    })
    const router = useRouter()
    const onClickLeft = () => {
      router.back()
    }
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
    const editLabel = () => {
      state.showDialog = true
    }
    return {
      ...toRefs(state),
      onClickLeft,
      onLoad,
      editLabel
    }
  }
}
</script>
<style lang="scss" scoped>
.dahu-detail{
  .content{
    padding: 10px;
    h3{
      &:first-of-type{
        margin-top: 0;
      }
    }
    :deep(.van-cell){
      padding: 10px 0;
      .van-cell__value{
        min-width: 80%;
      }
    }
  }
  :deep(.label-dialog){
    .dialog-content{
      padding: 10px;
      .van-button{
        margin: 0 4px 10px;
      }
    }
  }
}
</style>