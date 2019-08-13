const formidable = require('formidable');
const FileDataServices = require('../services/FileDataService');
const logger = require('../http/Logger');

class FileService {
  uploadFile(req,res) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if(err) console.log(err, '解析出错');
      const result = await FileDataServices.uploadAndSaveFile(files.picture.path);
      logger.info('上传图片成功', result);
      res.send(result);
    });
  }

  async downloadFile(req) {
    const fileId = '5d5126610939131aa307ef68';
    const result = await FileDataServices.downloadFile(fileId);
    logger.info('下载图片成功', result);
    return result;
  }
}

module.exports = new FileService();
