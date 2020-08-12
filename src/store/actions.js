import * as types from "./mutations-types";

export default {
  updateInfo(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(types.CHANGEINFO)
        resolve('abcde')
      }, 1000)
    })
  }
}