const { User } = require('../models');

class UserDataService {
  async addUser(registerInfo) {
    const result = await User.find({ name: registerInfo.name});
    if(result.length) {
      // TODO 最好能成异常抛出
      return '该账号已经注册'
    }

    const user = new User({
      name: registerInfo.name,
      cellphone : registerInfo.cellphone,
      avatar : registerInfo.avatar,
      point : registerInfo.point,
      password : registerInfo.password
    });

    const data = await user.save();

    return data;
  }

  updateUser() {

  }

  loginByUserName() {

  }

}

module.exports = new UserDataService();
