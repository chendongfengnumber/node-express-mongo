const { celebrate, Joi } = require('celebrate');

const OrderService = require('../../businessServices/OrderService');
const logger = require('../../http/Logger');


class createOrder {

  createOrderSchema() {
    return celebrate({
      body: Joi.object().keys({
        point: Joi.string().required(),
        userId: Joi.string().required(),
        shopeeOrderId: Joi.string().required(),
        shopeeInventory: Joi.string().required(),
        shipmentIds: Joi.string().required(),
        shopeePDFId: Joi.string().required(),
        mainShopName: Joi.string().required(),
        remarks: Joi.string().required()
      })
    });
  }

  async createOrderHandle(req, res) {
    logger.info('hh', req.body);
    try {
      const result = await OrderService.createOrder(req.body);
      res.send(result);
    } catch (e) {
      throw e;
    }
  }
}


module.exports = new createOrder();
