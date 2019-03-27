exports.install = function (Vue, options) {
  Vue.prototype.test = function (date) {
    alert(date)
  }
}
