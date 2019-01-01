'use strict';

console.log('\'Allo \'Allo! Popup');

chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  var currentTab = tabs.shift();
  console.log(currentTab);
})