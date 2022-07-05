'use strict';

const axios = require('axios');

module.exports.getBitcoinRate = async (event, context) => {
	const bitcoinRateUrl =
		'http://api.coinbase.com/v2/exchange-rates?currency=BTC';
	let message;

	try {
		console.log(`Start getting data from coinbase`);
		const httpRes = await axios.get(bitcoinRateUrl);
		const result = httpRes.data.data.rates.USD;
		message = `Current exchange rate: 1 Bitcoin = ${result} USD`;
		console.log(`Got data - ${message}`);
	} catch (error) {
		console.error(`Got error while getting data from coinbase: ${error}`);
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ message }),
	};
};
