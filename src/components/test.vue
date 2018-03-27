<template>
  <div>
    <input type="text" v-model="msg">
    <input type="button" @click="setName" value="点我">
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        msg: ''
      }
    },

    methods: {
      setName() {
        this.$store.commit('showUserName', this.msg)
      }
    }
  }
</script>
