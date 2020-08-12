import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import moduleA from "./modules/moduleA";

Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 100, name: 'aaa', age: 18},
    {id: 101, name: 'bbb', age: 20},
    {id: 102, name: 'ccc', age: 34},
    {id: 103, name: 'ddd', age: 55}
  ],
  info: {
    name: 'damao',
    age: 20
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
})

export default store
