const OrderDataService = require('../services/OrderDataService');

class OrderService {
  async createOrder(createOrderPayload) {
    try {
      return await OrderDataService.createOrder(createOrderPayload);
    } catch (e) {
      throw e;
    }
  }

  async getOrderList(userId) {
    try {
      return await OrderDataService.getOrderList(userId);
    } catch (e) {
      throw e;
    }
  }

}

module.exports = new OrderService();
