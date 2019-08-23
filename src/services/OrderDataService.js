const mongoose = require('mongoose');
const config = require('config');

const logger = require('../http/Logger');

const { Order } = require('../models');


mongoose.connect(config.get('MONGODB_URL'), { useNewUrlParser: true });

class OrderService {
  async createOrder(createOrderPayload) {
    const {
      point,
      userId,
      shopeeOrderId,
      shopeeInventory,
      shipmentIds,
      shopeePDFId,
      mainShopName,
      remarks
    } = createOrderPayload;
    logger.info('createOrderPayload', createOrderPayload);
    try {
      const order = new Order(createOrderPayload);
      const result =  await order.save();
      logger.info('创建订单成功', result);
      return result;
    } catch(e) {
      logger.error('创建订单失败', e);
      throw (e)
    }
  }

  async getOrderList(userId) {
    try {
      const result = await Order.find({ userId });
      logger.info('查询订单列表成功', result);
      return result;
    } catch (e) {
      logger.error('查询订单列表失败', e);
      throw e;
    }
  }
}

module.exports = new OrderService();

