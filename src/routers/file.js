const Router = require('../http/Router');
const FileService = require('../businessServices/FileService');
const router = new Router('/file');
const logger = require('../http/Logger');
const fs = require('fs');


router.post('/upload', async(req, res) => {
  await FileService.uploadFile(req, res);
});

router.get('/download', async(req, res) => {
  // res.set('Content-Type', 'image/jpg');
  const { fileId } = req.query;
  const stream = await FileService.downloadFile(fileId);
  stream.on('data', (thunk) => {
    console.log('thunk', thunk);
    res.json({ url: thunk })
  })
  .on('error', () => logger.info('error'))
  .on('finish', async () => res.end())
});

module.exports = router;

