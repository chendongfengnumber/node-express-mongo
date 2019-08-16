const fileRouter = require('./file');
const userRouter = require('./user');

module.exports = [
  ...fileRouter.routeConfig(),
  ...userRouter.routeConfig()
]
