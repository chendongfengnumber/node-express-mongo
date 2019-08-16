const Router = require('../http/Router');
const FileService = require('../businessServices/FileService');
const router = new Router('/file');
const logger = require('../http/Logger');


router.post('/upload', async(req, res) => {
  await FileService.uploadFile(req, res);
});

router.get('/download', async(req, res) => {
  // res.set('Content-Type', 'image/jpg');
  const stream = FileService.downloadFile();
  stream.pipe(res)
  .on('error', console.log)
  .on('finish', () => res.end());
  logger.info('下载图片成功');
});

module.exports = router;

