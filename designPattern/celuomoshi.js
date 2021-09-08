// 策略模式

function checkAuth(data) {
  if (data.role !== 'juejin') {
    console.log('不是管理员');
    return false;
  }
  if (data.grade < 1) {
    console.log('等级小于 1 级');
    return false;
  }
  if (data.job !== 'FE') {
    console.log('不是前端开发');
    return false;
  }
}


// 维护权限列表
const jobList = ['FE', 'BE'];
// 策略
var strategies = {
  checkRole: function(value) {
    console.log(value, "checkRole");
    return value === 'manager';
  },
  checkGrade: function(value) {
    return value >= 1;
  },
  checkJob: function(value) {
    return jobList.indexOf(value) > 1;
  },
  checkEatType: function(value) {
    return value === 'eat melons';
  }
};

// 校验规则
class Validator {
  constructor () {
    this.cache = [];
  }
  // 添加策略事件
  add (value, method) {
    this.cache.push(() => {
      return strategies[method](value)
    })
  }
  // 检查
  check () {
    console.log();
    for(let i = 0; i < this.cache.length; i++){
      var valiFn = this.cache[i];
      var res = valiFn();
      console.log(res,"res");
      if (!res) {
        return false;
      }
    }
    return true
  }
}

var compose1 = function() {
  var validator = new Validator();
  const data1 = {
    role: 'manager',
    grade: 3
  };
  validator.add(data1.role, 'checkRole');
  validator.add(data1.grade, 'checkGrade');
  const result = validator.check();
  console.log(result);
  return result;
};

compose1();






















