const config = require('config');
const mongoose = require('mongoose');


const MONGODB_URL = process.env.MONGODB_URL || config.get('MONGODB_URL');

if (!MONGODB_URL) {
  throw new Error('MONGODB_URL不存在');
}

// 连接数据库
mongoose.connect(MONGODB_URL, {
  poolSize: 10,
  autoReconnect: true
})
  .then(
    () => console.log(`数据库 ${MONGODB_URL} 连接成功`),
    (err) => console.error(`数据库 ${MONGODB_URL} 连接失败`, { err })
  );

module.exports = {};
