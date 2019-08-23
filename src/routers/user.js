const Router = require('../http/Router');
const UserDataService = require('../services/UserDataService');
const router = new Router('/user');
const logger = require('../http/Logger');


router.post('', async (req, res) => {
  console.log ('req', req.body);
  const addUserPayload = req.body;
  const result = await UserDataService.addUser(addUserPayload)
  res.send(result);
});

router.get('', async(req, res) => {

});


module.exports = router;
