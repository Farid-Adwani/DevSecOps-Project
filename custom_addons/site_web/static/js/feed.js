document.addEventListener("DOMContentLoaded", function(event) {
odoo.define('feed.news', function(require) {
"use strict";
var ajax = require('web.ajax');
ajax.jsonRpc("/feed1", 'call', {'news_json': JSON.parse(news_json)}).then(function(data) {
if (data) {
console.log('test');
    // Code
} else {
console.log('failed');
   // Code
}});
});
});
