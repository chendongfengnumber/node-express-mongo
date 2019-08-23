const  express = require('express');
const cors = require('cors'); // express cors中间件
const app = express();
const bodyParser = require('body-parser');  // 处理表单
const { errors } = require('celebrate');


const logger = require('./http/Logger');
const routes = require('./routers');


const allCors = function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next()
}
app.use(allCors);
// app.use(cors());

// 解析前端传入的表单
app.use(bodyParser.json());

routes.forEach(item => {
  switch (item.method) {
    case 'GET' :
      if (item.joi) {
        return app.get(item.pathUri, item.joi, item.callback);
      }
      app.get(item.pathUri, item.callback);
      break;
    case 'POST' :
      if (item.joi) {
        return app.post(item.pathUri, item.joi, item.callback);
      }
      app.post(item.pathUri, item.callback);
      break;
    case 'PUT' :
      app.put(item.pathUri, item.joi, item.callback);
      break;
    case 'DELETE' :
      app.delete(item.pathUri, item.joi, item.callback);
      break;
    case 'PATCH' :
      app.patch(item.pathUri, item.joi, item.callback);
      break;
    case 'OPTION' :
      app.option(item.pathUri, item.joi, item.callback);
      break;
    default :
      break;
  }
});

app.use(errors()) // 数据格式校验

app.listen(3000, () => logger.info('启动服务成功'));

