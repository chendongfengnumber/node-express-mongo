const Router = require('../http/Router');
const FileService = require('../businessServices/FileService');
const router = new Router('/user');
const logger = require('../http/Logger');


router.get('', async(req, res) => {
  res.send('user');
});


module.exports = router;
