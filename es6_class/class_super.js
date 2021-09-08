class A {
  static static_a = "my is A static_a";
  constructor() {
    this.x = 1;
  }
}

class B extends A { 
  x="a"
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x, "super.x"); // undefined
    console.log(this.x, "this.x"); // 3
  }
}
let bb = new B()
// let bb = new B()
A.x = 'a';
let bbb = new B()
// A.prototype.x = 'prototype.x'
// let bbbb = new B()
// console.log(B.static_a, "B.static_a");
