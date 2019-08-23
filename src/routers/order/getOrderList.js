const OrderService = require('../../businessServices/OrderService');
const logger = require('../../http/Logger');


class getOrderList {

  async getOrderListHandle(req, res) {
    logger.info('hh', req.body);
    const { userId } = req.query;
    try {
      const result = await OrderService.getOrderList(userId);
      res.send(result);
    } catch (e) {
      throw e;
    }
  }
}


module.exports = new getOrderList();
