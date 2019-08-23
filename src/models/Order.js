const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  point: Number, // 扣减的积分
  userId: String, // 用户唯一Id
  shopeeOrderId: String, // shopee订单号
  shopeeInventory: String, //shopee仓库
  shipmentIds: String, // 包裹集合
  shopeePDFId: String, // 上传PDF文件后返回的id
  mainShopName: String, // 上传主商品图名称后返回的id
  remarks: String // 备注信息
});

module.exports = mongoose.model('Order', OrderSchema);
