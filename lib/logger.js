
function requestLogger(httpModule) {
	var original = httpModule.request;
	httpModule.request = function (options, callback) {
		debug(options);
		// console.log(options.href || options.proto + "://" + options.host + options.path, options.method)
		return original(options, callback)
	};

	httpModule.response = function (options, callback) {
		debug(options);
		// console.log(options.href || options.proto + "://" + options.host + options.path, options.method)
		return original(options, callback)
	};
}

requestLogger(require('http'))
requestLogger(require('https'));
