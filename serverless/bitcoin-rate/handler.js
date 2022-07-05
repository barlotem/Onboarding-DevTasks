'use strict';

const axios = require('axios');

module.exports.getBitcoinRate = async (event, context, callback) => {
	let bitcoinRateUrl = 'http://api.coinbase.com/v2/exchange-rates?currency=BTC';
	let message;

	console.log(`Start getting data from coinbase`);

	await axios
		.get(bitcoinRateUrl)
		.then(function (res) {
			let result = res.data.data.rates.USD;
			message = `Current exchange rate: 1 Bitcoin = ${result} USD`;
			console.log(`Got data - ${message}`);
		})
		.catch((error) => {
			console.error(`Got error while getting data from coinbase: ${error}`);
		});

	return callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message }),
	});
};
