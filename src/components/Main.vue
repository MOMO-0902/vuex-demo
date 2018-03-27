<template>
  <div class="">
    <h3>{{myName}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'Main',
    // 通过计算属性获取到在全局容器store中state保存的状态值
    computed: {
      myName() {
        return this.$store.state.userName
      }
    }
  }
</script>
