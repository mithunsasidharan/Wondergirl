'use strict';
var quotes = require('./quotes.json');
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

module.exports = {
    getQuote: function() {
        return '"' + randomQuote.quote.trim() + '" -' + randomQuote.author;
    }
}