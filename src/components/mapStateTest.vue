<template>
  <div>
    <h3>{{userName}}444444444</h3>
    <h3>{{count}}</h3>
    <!-- <h3>{{countAlias}}</h3>
    <h3>{{countPlusLocalState}}</h3> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'Main',
    data() {
      return {
        localCount: 8
      }
    },
    // 通过计算属性获取到在全局容器store中state保存的状态值
    // 通过mapState辅助函数帮助组件获取多个状态，count, countAlias, countPlusLocalState均为使用mapState的方式


    // computed: mapState({
    //   count: state => state.count, //此处理解为传入state对象,修改state.count属性
    //   countAlias: 'count', // 传入字符串参数'count'等同于'state => state.count'
    //   countPlusLocalState(state) {
    //     return state.count + this.localCount
    //   }, // 为了能够使用'this'获取局部状态，必须倩常规函数
    //   myName() {
    //     return this.$store.state.userName
    //   }
    // })

    computed: mapState([
      'count',
      'userName'
    ])
  }
</script>
