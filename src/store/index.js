import { createStore } from 'vuex'

export default createStore({
  state: {
    // defines the variable.
    cnt: 0
  },
  getters: {
  },
  mutations: {
    // only updates the state by means of mutation.
    setCounter(state, value){
      state.cnt = value
    }
  },
  actions: {
    increment(context) {
      context.commit('setCounter', ++context.state.cnt)
    },
    decrement(context){
      if(context.state.cnt > 0 )
      context.commit('setCounter', --context.state.cnt)
    }
  },
  modules: {
  }
})
