const fileRouter = require('./file');
const userRouter = require('./user');
const OrderRouter = require('./order/index');

module.exports = [
  ...fileRouter.routeConfig(),
  ...userRouter.routeConfig(),
  ...OrderRouter.routeConfig()
]
