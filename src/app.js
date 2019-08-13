const  express = require('express');
const app = express();

const logger = require('./http/Logger');
const routes = require('./routers');
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

