// readfile zamock.config && use mock.js mock request
// configFileName :zamock.config.js 
// configFileExample：
// module.exports = {
//    user_homeinfo :{ homeAddress: 'xxxx路xxxx号501', homePhone: '021-888888'}
// }
var Mock = require('./lib/mock'),
	mocksource = require('../../zamock.config')

var ZaMock = function(host) {
	for (var key in mocksource) {
		var url = host + '\/' + key.replace('_', '\/');
		console.log('url:' + url);
		Mock.mock(new RegExp(url), mocksource[key]);
	}
}
module.exports = ZaMock;