import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 在state存储了一个状态userName
  state: {
    userName: 'ghosthuomeng',
    count: 5,
    todos: [
      { id: 1, text: '...', done: true},
      { id: 2, text: '...', done: false}
    ]
  },

  getters: {
    // getter属性
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // getter方法
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }

  },
  // 用来存放改变后的状态值
  mutations: {
    showUserName(state, msg) {
      state.userName = msg
    }
  }
})

export default store
