const Router = require('../../http/Router');
const createOrder = require('./createOrder');
const getOrderList = require('./getOrderList');

const router = new Router('/order');

router.post('', createOrder.createOrderSchema, async(req, res) => await createOrder.createOrderHandle(req, res));

router.get('', async(req, res) => await getOrderList.getOrderListHandle(req, res));

module.exports = router;
