var numbers = [65, 44, 12, 4];
 

// 参数	描述
// total	必需。初始值, 或者计算结束后的返回值。
// currentValue	必需。当前元素
// currentIndex	可选。当前元素的索引
// arr	可选。当前元素所属的数组对象
var a = numbers.reduce(function (total, num, currentIndex, arr) {
  console.log(total, num, currentIndex, arr);
  return total + num;
});
console.log(a);