export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  getStudents(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}