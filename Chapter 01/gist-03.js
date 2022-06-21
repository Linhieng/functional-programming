let enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 },
]

// 命令式编程
// let totalGrades = 0
// let totalStudentsFount = 0
// for (let i = 0; i < enrollment.length; i++) {
//   let student = enrollment[i]
//   if (student != null) {
//     if (student.enrolled > 1) {
//       totalGrades += student.grade
//       totalStudentsFount++
//     }
//   }
// }
// const average = totalGrades / totalStudentsFount // 90

// 函数链(大改, 我也不知道是不是这样, )
Object.prototype.pluck = function (key) {
  return this.map((v) => v[key])
}
Array.prototype.average = function () {
  return this.reduce((total, num) => total + num) / this.length
}
const average = enrollment
  .filter((student) => student.enrolled > 1)
  .pluck('grade')
  .average()

console.log(average)
