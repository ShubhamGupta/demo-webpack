var component = require('./profileComponent');
// require ('./feed-style.css');

var pageHeading = document.createElement('h1');

pageHeading.className = 'feed-heading';
pageHeading.innerHTML = 'Hello Webpack! This is feed component.';

document.body.appendChild(pageHeading);
