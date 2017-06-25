/*
	Here's a generally good way to use Promises.
	Error handling is not addressed here.
*/
'use strict';

function asyncMethod(message) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(message);
			resolve();
		}, 500);
	});
}

function findUser() {
	return asyncMethod('Find user');
}

function validateUser() {
	return asyncMethod('validate user');
}

function doMoreStuff() {
	return asyncMethod('Do more stuff');
}

asyncMethod('Open DB Connection')
	.then(findUser)
	.then(validateUser)
	.then(doMoreStuff)
	.then(() => console.log('done'));


