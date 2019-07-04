const request = require('request');

request({
    url: 'https://itunes.apple.com/search?term=acdc&entity=musicVideo',
    json: true
}, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});