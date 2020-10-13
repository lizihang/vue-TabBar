import * as types from "../mutations-types";

export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    //如果和store中的mutations重名，那么两个方法都调用了
    [types.UPDATENAME](state) {
      state.name = 'lisi'
    }
  }
}