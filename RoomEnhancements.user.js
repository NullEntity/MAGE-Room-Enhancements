// ==UserScript==
// @name           plug.dj MAGE Room Enhancements
// @namespace      Dis
// @include        /^https?://(www\.)?plug\.dj/mage/$/
// @version        1.0.1
// @updateURL      https://raw.github.com/NullEntity/MAGE-Room-Enhancements/master/RoomEnhancements.user.js
// @downloadURL    https://raw.github.com/NullEntity/MAGE-Room-Enhancements/master/RoomEnhancements.user.js
// ==/UserScript==

javascript: (function () {
var jsCode = document.createElement('script'); 
jsCode.setAttribute('id', 'plugbot-js'); 
jsCode.setAttribute('src', 'https://raw.github.com/NullEntity/MAGE-Room-Enhancements/master/RoomEnhancements.js'); 
document.body.appendChild(jsCode); }());