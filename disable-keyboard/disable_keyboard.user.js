// ==UserScript==
// @name          Disable keyboard
// @namespace     http://lacostej.github.com/disable-keyboard
// @include       *
// @description   Disable keyboard input
// @version       1.0
// ==/UserScript==

document.addEventListener('keydown', function (e)
{
  e.preventDefault();
}, false);
