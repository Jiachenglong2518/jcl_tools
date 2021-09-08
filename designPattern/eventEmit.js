class Product {
  constructor(name) {
      this.name = name
  }
  init() {
      console.log('init')
  }
  fun() {
      console.log('fun')
  }
}

class Factory {
  create(name) {
      return new Product(name)
  }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()




class jQuery {
  constructor(selector) {
      super(selector)
  }
  add() {
      
  }
// 此处省略若干API
}

window.$ = function(selector) {
  return new jQuery(selector)
}




class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}




//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var point = new Point(2, 3);
point.toString() // (2, 3)
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true