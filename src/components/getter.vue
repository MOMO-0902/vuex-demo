<template>
  <div>
    <h3>{{doneTodosCount}}</h3>
    <h3>{{getTodoById}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'Main',

    computed: {
      doneTodosCount() {
        // getter通过属性访问时是作为vue的响应式系统的一部分缓存的
        return this.$store.getters.doneTodos.length
      },
      // getter通过方法访问,
      getTodoById() {
        return this.$store.getters.getTodoById(2)
      }
    }
  }
</script>
