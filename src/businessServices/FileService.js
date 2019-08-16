const formidable = require('formidable');
const FileDataServices = require('../services/FileDataService');
const logger = require('../http/Logger');
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

class FileService {

  uploadFile(req,res) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if(err) console.log(err, '解析出错');
      logger.info('上传图片解析', files);
      // 下面的取file属性值，是因为前端在formData.append('file', file);
      const { path, type, name } = lodash.get(files, 'file') || {};
      const result = await FileDataServices.uploadAndSaveFile(path, type, name);
      logger.info('上传图片成功', files);
      res.send(result);
    });
  }

  downloadFile(fileId) {
    const bucketStream = FileDataServices.downloadFile(fileId);
    return bucketStream;
  }
}

module.exports = new FileService();
