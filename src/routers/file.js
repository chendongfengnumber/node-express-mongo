const Router = require('../http/Router');
const FileService = require('../businessServices/FileService');
const router = new Router('/file');


router.post('/upload', async(req, res) => {
  await FileService.uploadFile(req, res);
});

router.get('/download', async(req, res) => {
  const result = await FileService.downloadFile();
  res.send(result);
});

module.exports = router;

