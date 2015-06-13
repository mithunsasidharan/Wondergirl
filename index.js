'use strict';

module.exports = {
	getQuote:  function(){
		var quotes = require('./quotes.json');
		var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		return '"' + randomQuote.quote.trim() + '" -'+ randomQuote.author;
	}
}


