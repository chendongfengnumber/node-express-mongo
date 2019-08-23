
module.exports = class Router {

  constructor(basePath) {
    this.all = [];
    this.basePath = basePath;
  }

  route(options) {
    this.all.push(options);
  }

  get(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'GET', pathUri, callback, joi });
  }

  post(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'POST', pathUri, callback, joi });
  }

  put(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'PUT', pathUri, callback, joi });
  }

  delete(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'DELETE', pathUri, callback, joi });
  }

  option(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'OPTION', pathUri, callback, joi });
  }

  patch(path, callback, joi) {
    const pathUri = `${this.basePath}${path}`;
    return this.route({ method: 'PATCH', pathUri, callback, joi });
  }

  routeConfig() {
    const routeConfigLength = this.all.length;
    // 检查重复路由地址和请求方法
    for (let i = 0; i < routeConfigLength; i += 1) {
      const item = this.all[i];
      for (let j = i + 1; j < routeConfigLength; j += 1) {
        const routeConfigItem = this.all[j];
        if (item.method === routeConfigItem.method && item.pathUri === routeConfigItem.pathUri) {
          throw (`路由重复,路由数组的第${i}和${j}`);
        }
      }
    }
    return this.all;
  }
}
