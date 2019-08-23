const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema =  new Schema({
  name: String, // 用户名
  cellphone: String, // 手机号
  password: String, // 密码
  point: Number, // 积分
  avatar: String // 头像
});

module.exports = mongoose.model('User', UserSchema);
