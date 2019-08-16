const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const logger = require('../http/Logger');
let bucket;
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
.then(() => {
  const conn = mongoose.connection;
  const opts = {
    bucketName: 'GridFSBucket'
  };
  bucket = new mongoose.mongo.GridFSBucket(conn.db, opts);
})



class FileDataService {
  async saveFile(bucket, pathUrl, type, name) {

    const options = {
      contentType: type
    };
    return new Promise((resolve, reject) => {
      fs.createReadStream(pathUrl)
        .pipe(bucket.openUploadStream(name, options))
        .on('error', function (err) { reject(err); })
        .on('finish', function (file) { resolve(file); });
    });
  }

  async uploadAndSaveFile(pathUri, type, name) {
    const fileResult = await this.saveFile(bucket, pathUri, type, name);
    logger.info('保存图片成功', fileResult);
    return fileResult;
  };

  downloadFile(fileId) {
    return bucket.openDownloadStream(mongoose.Types.ObjectId(fileId));
  }
}

module.exports = new FileDataService();
