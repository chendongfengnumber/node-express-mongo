const  express = require('express');
const cors = require('cors'); // express cors中间件
const app = express();


const logger = require('./http/Logger');
const routes = require('./routers');


const allCors = function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next()
}
app.use(allCors);
// app.use(cors());


routes.forEach(item => {
  switch (item.method) {
    case 'GET' :
      app.get(item.pathUri, item.callback);
      break;
    case 'POST' :
      app.post(item.pathUri, item.callback);
      break;
    case 'PUT' :
      app.put(item.pathUri, item.callback);
      break;
    case 'DELETE' :
      app.delete(item.pathUri, item.callback);
      break;
    case 'PATCH' :
      app.patch(item.pathUri, item.callback);
      break;
    case 'OPTION' :
      app.option(item.pathUri, item.callback);
      break;
    default :
      break;
  }
});

app.listen(3000, () => logger.info('启动服务成功'));

