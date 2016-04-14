// readfile zamock.config && use mock.js mock request
// configFileName :zamock.config.js 
// configFileExample：
// module.exports = {
//    user_homeinfo :{ homeAddress: 'xxxx路xxxx号501', homePhone: '021-888888'}
// }
var Mock = require('./lib/mock'),
	mocksource = require('../../zamock.config')

var ZaMock = function(host) {


	// host 针对可配置host 假如不设置的话，取当前host
	host = host || window.location.origin;
	// 读取配置文件 获取已经配置的请求mock数据
	for (var key in mocksource) {
		// 循环mock数据，创建拦截列表
		var url = host + '\/' + key.replace('_', '\/');
		// 支持带参数的请求，但是同时设置两种的话不带参数的会覆盖带参数的请求
		if (url.indexOf('?') < 0) {
			url = new RegExp(url);
		}
		Mock.mock(url, mocksource[key]);
	}
}
module.exports = ZaMock;