// 当上一个任务完成并返回true时继续执行下一个任务
export class Action {
  constructor({ selfAction, params }) {
    this.selfAction = selfAction; //当前要执行的方法
    this.params = params; // 当前方法的参数
    this.nextAction = null; //下一个要执行的action实例
  }
  setNextAction(action) {
    this.nextAction = action;
    return action;
  }
  async handle() {
    const flag = await this.selfAction(this.params);
    if (flag && this.nextAction != null) {
     await this.nextAction.handle()
    }
  }
};


// 提交订单
const submitOrder = async (data) => {
  let action_thirdSubmit = new Action({ 
    "selfAction": thirdSubmit,
    "params": data 
  })
  let action_submitEpidemic = new Action({ 
    "selfAction": submitEpidemic,
  })
  let action_toPay = new Action({ "selfAction": toPay })
  action_thirdSubmit.setNextAction(action_submitEpidemic).setNextAction(action_toPay);
  action_thirdSubmit.handle();
};