'use strict';
var quotes = require('./quotes.json');

module.exports = {
	getQuote:  function(){
		var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
		return '"' + randomQuote.quote.trim() + '" -'+ randomQuote.author;
	}
}


