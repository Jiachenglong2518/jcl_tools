//比分直播 工具类
import urlconfig from './urlconfig'
export default {
  setlocalStorage:function(key, val){
    try {
      window.localStorage.setItem(key, val);
    } catch ( err ) {
    }
  },
  getlocalStorage (key) {
     return window.localStorage.getItem(key);
  },
  removelocalStorage (key) {
     return window.localStorage.removeItem(key);
  },
  isPrivateMode:function(){
    var isPrivateMode = false;
    try {
      window.localStorage.setItem('isPrivateMode', '1');
      window.localStorage.removeItem('isPrivateMode');
      isPrivateMode  = false;
    } catch (e) {
      isPrivateMode = true
    }
    return isPrivateMode;
  },
  isCookie:function(){
    return navigator.cookieEnabled;
  },
  delCookie: function(name) {
    var path_domain = "; path=/; domain=jihai8.com";
    document.cookie = name + "=; expires=" + new Date(0).toUTCString() + path_domain;
  },
  getCookie: function(name, cookieStr) {
    var cookie_str   = cookieStr || document.cookie;
    var cookie_start = cookie_str.indexOf(name + "=");
    var cookie_end   = cookie_str.indexOf(";", cookie_start);
    return cookie_start == -1 ? "" : cookie_str.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : cookie_str.length));
  },
  setCookie: function(name, value, day) {
    var expires = new Date();
    var day = day || 1;
    expires.setTime(expires.getTime() + day * 24 * 60 * 60 * 1000);
    var path_domain = "; path=/; domain=jihai8.com";
    if (typeof (name) === "object") {
      for (var v in name) {
        if (name[v] != '' || name[v] === 0 || name[v].length) { //如果值为空，就不设置cookie
          var cookie_content = escape(v) + "=" + escape(name[v]);
          document.cookie = cookie_content + "; expires=" + expires.toGMTString() + path_domain;
        }
      }
    } else {
      if (value != '' || value === 0 || value.length) { ////如果值为空，就不设置cookie
        var cookie_content = name + "=" + value;
        document.cookie = cookie_content + ("; expires=" + expires.toGMTString()) + path_domain;
      }
    }
  },
  getsrc: function(){
    var src = this.urlQuery("src") || "pc_jh";
    return src;
  },
  isLogin: function() {
    var result = false;
    if (this.getCookie("JH")) {
      result = true;
    }
    return result;
  },
  allMap: {
    "SPF"        : "赛事胜平负",
    "SPF_BC"     : "赛事半场胜平负",
    "RQSF"       : "赛事让球胜负",
    "RQSF_BC"    : "赛事半场让球胜负",
    "DXQ"        : "赛事大小球",
    "DXQ_BC"     : "赛事半场大小球",
    "SF"         : "赛事胜负",
    "RFSF"       : "赛事让分胜负",
    "DXF"        : "赛事大小分",
    "DXQ_CORNER" : "赛事角球大小球",
    "JCLQDXF"  : "竞彩大小分",
    "JCLQRFSF" : "竞彩让分胜负",
    "JCLQSF"   : "竞彩胜负",
    "JCRQSF"   : "竞彩让球胜平负",
    "JCSPF"    : "竞彩胜平负",
    "LQDXF"    : "赛事大小分",
    "LQDXF_BC"    : "赛事半场大小分",
    "LQRFSF"   : "赛事让分胜负",
    "LQRFSF_BC"   : "赛事半场让分胜负",
    "LQSF"     : "赛事胜负",
  },
  //让球盘口
  GoalCn: [
    "平手",
    "平/半",
    "半球",
    "半/一",
    "一球",
    "一/球半",
    "球半",
    "球半/两",
    "两球",
    "两/两球半",
    "两球半",
    "两球半/三",
    "三球",
    "三/三球半",
    "三球半",
    "三球半/四球",
    "四球",
    "四/四球半",
    "四球半",
    "四球半/五",
    "五球",
    "五/五球半",
    "五球半",
    "五球半/六",
    "六球",
    "六/六球半",
    "六球半",
    "六球半/七",
    "七球",
    "七/七球半",
    "七球半",
    "七球半/八",
    "八球",
    "八/八球半",
    "八球半",
    "八球半/九",
    "九球",
    "九/九球半",
    "九球半",
    "九球半/十",
    "十球"
  ],
  //大小球盘口
  GoalCn2: [
  	"0", 
  	"0/0.5", 
  	"0.5", 
  	"0.5/1", 
  	"1", 
  	"1/1.5", 
  	"1.5", 
  	"1.5/2", 
  	"2", 
  	"2/2.5", 
  	"2.5", 
  	"2.5/3", 
  	"3", 
  	"3/3.5", 
  	"3.5", 
  	"3.5/4", 
  	"4", 
  	"4/4.5", 
  	"4.5",
  	"4.5/5", 
  	"5", 
  	"5/5.5", 
  	"5.5", 
  	"5.5/6", 
  	"6", 
  	"6/6.5", 
  	"6.5", 
  	"6.5/7", 
  	"7", 
  	"7/7.5", 
  	"7.5", 
  	"7.5/8", 
  	"8", 
  	"8/8.5", 
  	"8.5", 
  	"8.5/9", 
  	"9", 
  	"9/9.5", 
  	"9.5", 
  	"9.5/10", 
  	"10", 
  	"10/10.5", 
  	"10.5", 
  	"10.5/11", 
  	"11", 
  	"11/11.5", 
  	"11.5", 
  	"11.5/12", 
  	"12", 
  	"12/12.5", 
  	"12.5", 
  	"12.5/13", 
  	"13", 
  	"13/13.5", 
  	"13.5", 
  	"13.5/14", 
  	"14" 
   ],
  //数字盘口转汉汉字	
  Goal2GoalCn: function (goal) {
    if(goal > 10 || goal < -10) {
      return goal + "球";
    }
    if(goal >= 0)  {
      return this.GoalCn[parseInt(goal * 4)];
    }
    else {
      return "受" + this.GoalCn[Math.abs(parseInt(goal * 4))];
    }
  },
  Goal2GoalCn2: function (goal) {
    if(goal > 14) {
      return goal + "球";
    }
    return this.GoalCn2[parseInt(goal * 4)];
  },
  //状态转汉字
  StatusCn: {
    "0": "未",
    "1": "上半场", 
    "2": "中场", 
    "3": "下半场",
    "4": "加时",
    "5": "点球",
    "-11": "待定",
    "-12": "腰斩",
    "-13": "中断",
    "-14": "推迟",
    "-1": "完",
    "-10": "取消"
  },
  //状态转汉字 篮球
  StatusCnLq: {
    "0": "未开",
    "1": "第1节", 
    "2": "第2节", 
    "3": "第3节",
    "4": "第4节",
    '5': `1'OT`,
    '6': `2'OT`,
    '7': `3'OT`,
    "-2": "待定",
    "-12": "腰斩",
    "-3": "中断",
    "-5": "推迟",
    "-1": "完",
    "-4": "取消",
    "50": "中场"
  },
  matchStateMap: {
    "0": "未",
    "1": "上半场",
    "2": "中场",
    "3": "下半场",
    "4": "加时",
    "5": "点球",
    "-11": "待定",
    "-12": "腰斩",
    "-13": "中断",
    "-14": "推迟",
    "-1":  "完",
    "-10": "取消",
    "-99": "异常"
  },
  LqMatchStateMap: {
    "0": "未",
    "1": "第1节",
    "2": "第2节",
    "3": "第3节",
    "4": "第4节",
    "5": "第1'OT",
    "6": "第2'OT",
    "7": "第3'OT",
    "8": "第4'OT",
    "9": "第5'OT",
    "-1": "完",
    "-2": "待定",
    "-3": "中断",
    "-4": "取消",
    "-5": "推迟",
    "50": "中场",
    "-99": "异常"
  },
  LqNcaaStateMap: {
    "0": "未",
    "1": "上半场",
    "2": "上半场",
    "3": "下半场",
    "4": "下半场",
    "5": "第1'OT",
    "6": "第2'OT",
    "7": "第3'OT",
    "8": "第4'OT",
    "9": "第5'OT",
    "-1": "完",
    "-2": "待定",
    "-3": "中断",
    "-4": "取消",
    "-5": "推迟",
    "50": "中场",
    "-99": "异常"
  },
  formatDate (date, fmt, flag) {
     /**
       * 对Date的扩展，将 Date 转化为指定格式的String
       * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
       * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
       * eg:
       * this.formatDate(new Date(),'yyyy-MM-dd') ==> 2014-03-02
       * this.formatDate(new Date(),'yyyy-MM-dd hh:mm') ==> 2014-03-02 05:04
       * this.formatDate(new Date(),'yyyy-MM-dd HH:mm') ==> 2014-03-02 17:04
       * this.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
       * this.formatDate(new Date(),'yyyy-MM-dd E HH:mm:ss') ==> 2009-03-10 二 20:09:04
       * this.formatDate(new Date(),'yyyy-MM-dd EE hh:mm:ss') ==> 2009-03-10 周二 08:09:04
       * this.formatDate(new Date(),'yyyy-MM-dd EEE hh:mm:ss') ==> 2009-03-10 星期二 08:09:04
       * this.formatDate(new Date(),'yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18
     */
      if(!date) {
        return;
      }

      var o = {
          "M+" : date.getMonth() + 1, //月份
          "d+" : date.getDate(), //日
          "h+" : flag ? date.getHours() : (date.getHours() % 12 == 0 ? 12 : date.getHours() % 12), //小时
          "H+" : date.getHours(), //小时
          "m+" : date.getMinutes(), //分
          "s+" : date.getSeconds(), //秒
          "q+" : Math.floor((date.getMonth() + 3) / 3), //季度
          "S"  : date.getMilliseconds() //毫秒
      };
      var week = {
          "0" : "日",
          "1" : "一",
          "2" : "二",
          "3" : "三",
          "4" : "四",
          "5" : "五",
          "6" : "六"
      };
      if(/(y+)/.test(fmt)){
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      if(/(E+)/.test(fmt)){
          fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay() + ""]);
      }
      for(var k in o){
          if(new RegExp("("+ k +")").test(fmt)){
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          }
      }
      return fmt;
  },
  format:  function(num, decimal, round) {
    var pow;
    decimal = typeof (decimal * 1) !== 'number' || isNaN(decimal * 1) ? 2 : Math.abs(decimal);
    pow = Math.pow(10, decimal);
    num *= 1;
    //f_num处理浮点数问题，能保证保留10位小数以内计算得到正常结果
    var f_num = 0.000000000099999;
    switch (round) {
    case 1:
      num = Math.ceil(num * pow) / pow;
      break;
    case -1:
      num = Math.floor(num * pow + f_num) / pow;
      break;
    case 465:
      //四舍六入五成双,如保留两位小数，第三位小数如果是5，则看第二位是奇偶，如果是奇，则进位，否则舍去
      var is_jo = Math.floor(num * pow + f_num) % 10 % 2;
      //要进位上数字是否是5
      var is_five = Math.floor(num * pow * 10 + f_num) % 10 == 5;
      var step = is_five && !is_jo ? 1 / pow : 0;
      num = Q_core.number.format(num, decimal) - step;
      break;
    default:
      num = (num * pow + f_num) / pow;
    }
    return (num.toFixed(decimal) + '').replace(/^\./g, '0.').replace(/\.$/, '');
  },
  /**
   * @description 返回num1除num2的整除数和余数
   * @example Q.number.aliquots_remainder(1/3,100,2,0)
   * @param {Number} num1 被除数【必选】
   * @param {Number} num2 除数【必选】
   * @return {Array} [整除数,余数]
  */
  aliquots_remainder: function(num1, num2) {
    return [parseInt(num1 / num2, 10), num1 % num2];
  },
  /**
   * @description 将一个时间差转换成x天x时x分x秒
   * @param {Number} num  时间差
   * @return {String} x天x时x分x秒
  */
  to_dhms: function (num) {
    var d, h, m;
    d = this.aliquots_remainder(num * 1, 86400000);
    //24 * 60 * 60 * 1000
    h = this.aliquots_remainder(d[1], 3600000);
    //60 * 60 * 1000
    m = this.aliquots_remainder(h[1], 60000);
    //60*1000
    return [d[0], h[0], m[0], parseInt(m[1] / 1000, 10)];
  }, 
  /**
   * @description 批量替换
   * @param {String} str 被替换的字符串 【必选】
   * @param {Array} arr 替换规则 【必选】
   * @return {String} 替换后的字符串
   * @example Q.string.mul_replace('test',[['t','h'],['st','llo']]);
  */ 
  mul_replace: function (str, arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
        str = str.replace(arr[i][0], arr[i][1]);
    }
    return str;
  },
  urlQuery: function(name) {
    var href = location.search;
    href = href.substr(1).replace(/#[^&]*$/, '');
    var params = href.split('&');
    for (var i = 0, j = params.length; i < j; i++) {
      var temp = params[i].split('=');
      if (name == temp[0]) {
        return temp[1];
      }
    }
    return '';
  },
  appendUrlParam: function(url, param, isHashMode) {
      if (typeof param == "string") {
         param = param.replace(/^&/, "");
      } 
      if (!param) {
          return url;
      }
      if (isHashMode) {
          if (url.indexOf("#") == -1) {
              url += "#" + param;
          } else {
              url += "&" + param;
          }
      } else {
          if (url.indexOf("#") == -1) {
              if (url.indexOf("?") == -1) {
                  url += "?" + param;
              } else {
                  url += "&" + param;
              }
          } else {
              var tmp = url.split("#");
              if (tmp[0].indexOf("?") == -1) {
                  url = tmp[0] + "?" + param + "#" + (tmp[1] || "");
              } else {
                  url = tmp[0] + "&" + param + "#" + (tmp[1] || "");
              }
          }
      }
      return url;
  },
  addClass: function(obj, cls) {
      if (this.hasClass(obj, cls)) {
          return true;
      }
      var obj_class = obj.className
        , blank = (obj_class != '') ? ' ' : '';
      var added = obj_class + blank + cls;
      obj.className = added;
  },
  removeClass: function(obj, cls) {
      var obj_class = ' ' + obj.className + ' ';
      obj_class = obj_class.replace(/(\s+)/gi, ' ');
      var removed = obj_class.replace(' ' + cls + ' ', ' ');
      removed = removed.replace(/(^\s+)|(\s+$)/g, '');
      obj.className = removed;
  },
  hasClass: function(obj, cls) {
      var obj_class = ' ' + obj.className + ' ';
      obj_class = obj_class.replace(/(\s+)/gi, ' ');
      return obj_class.indexOf(' ' + cls + ' ', ' ') !== -1;
  },
  attr: function(obj, key, val) {
      if (val) {
          obj.setAttribute(key, val);
          return false;
      }
      return obj.getAttribute(key);
  },
  get_tagurl (tag_info) {
    var url = "javascript:;";
    //足球
    if (tag_info.zid == '1') {
      if (tag_info.cid == 1) {
        url = urlconfig.httptype + "//www.jihai8.com/player/" + tag_info.tid + ".html";
      } else if (tag_info.cid == '2') {
        url = urlconfig.httptype + "//www.jihai8.com/team/summary_" + tag_info.tid + ".html";
      } 
    } else {
      // 篮球
      url =  `${urlconfig.httptype}//www.jihai8.com/tag/${tag_info.zid}_${tag_info.cid}_${tag_info.tid}.html`;
        
    }
    return url;
  }
}