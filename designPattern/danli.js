// 单例模式
class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
      if (this.state === 'show') {
          alert('已经显示')
          return
      }
      this.state = 'show'
      console.log('登录框显示成功')
  }
  hide() {
      if (this.state === 'hide') {
          alert('已经隐藏')
          return
      }
      this.state = 'hide'
      console.log('登录框隐藏成功')
  }
}
LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      console.log('no');
      instance = new LoginForm()
    }
    console.log('has');
    return instance
  }
})()
// 通过自执行的匿名函数，构建一个闭包，可以把判断类是否实例化过的
// 和缓存类实例化生成的对象的变量instance缓存起来
let obj1 = LoginForm.getInstance()
obj1.show()

let obj2 = LoginForm.getInstance()
obj2.hide()

console.log(obj1 === obj2)