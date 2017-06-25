/*
	Example of async await.
	Error handling is not addressed here.
*/

'use strict';

function asyncMethod(message, num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`${message} ${num}`);
			resolve(num + 1);
		}, 500);
	});
}

async function main() {
	var one = await asyncMethod('Open DB Connection', 0);
	var two = await asyncMethod('Find user', one);
	var three = await asyncMethod('validate user', two);
	var four = await asyncMethod('Do more stuff', three);
}

main();
