/*
	Example of async await.
	Error handling is not addressed here.
*/

'use strict';

let main = (() => {
	var _ref = _asyncToGenerator(function* () {
		var one = yield asyncMethod('Open DB Connection', 0);
		var two = yield asyncMethod('Find user', one);
		var three = yield asyncMethod('validate user', two);
		var four = yield asyncMethod('Do more stuff', three);
	});

	return function main() {
		return _ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(message, num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`${message} ${num}`);
			resolve(num + 1);
		}, 500);
	});
}

main();
