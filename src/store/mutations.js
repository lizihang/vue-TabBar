import * as types from "./mutations-types";

export default {
  [types.INCREMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  [types.INCREMENTCOUNT](state, counte) {
    state.counter += counte
  },
  [types.SAVESTUDENT](state, student) {
    state.students.push(student)
  },
  [types.CHANGEINFO](state) {
    state.info.name = 'xiao mao'
    // 非响应式
    // state.info['addr'] = 'Los Angeles'
    // 响应式
    // Vue.set(state.info, 'addr', 'Los Angeles')

    // 非响应式
    // delete state.info.age
    // 响应式
    // Vue.delete(state.info, 'age')
  }
}