import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:111, 
    // 所有的组件都能够访问这个count值
    msg:'hello'
  },
  mutations: {
    // 传值函数
    add(state,num){
      state.count += num;
    },
    reduce(state,num){
      state.count -=num;
    }
  },
  getters:{
    num(state){
      return state.count + state.msg;
    },
    xx(state){
      return state.count*20;
    }
  },
  actions: {
    // action中封装异步操作，最终需要调用mutation中的方法修改状态
    addActions({commit},num){
      commit('add',num);
    }


  }
})
