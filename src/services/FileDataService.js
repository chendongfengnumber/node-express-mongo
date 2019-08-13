const fs = require('fs');
const mongoose = require('mongoose');

const logger = require('../http/Logger');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
const conn = mongoose.connection;


class FileDataService {
  async saveFile(bucket, pathUrl) {
    const splitArr = pathUrl.split('/');
    const fileName = splitArr[splitArr.length - 1];
    return new Promise((resolve, reject) => {
      fs.createReadStream(pathUrl)
        .pipe(bucket.openUploadStream(fileName))
        .on('error', function (err) { reject(err); })
        .on('finish', function (file) { resolve(file); });
    });
  }

  async uploadAndSaveFile(pathUri) {
    const opts = {
      bucketName: 'GridFSBucket'
    };
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, opts);
    const fileResult = await this.saveFile(bucket, pathUri);
    logger.info('保存图片成功', fileResult);
    return fileResult;
  };

  async downloadFile(fileId) {
    const opts = {
      bucketName: 'GridFSBucket'
    };
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, opts);
    return await bucket.openDownloadStream(fileId);
  }
}

module.exports = new FileDataService();
