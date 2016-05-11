var addClass = require('./utils/addClass');
var removeClass = require('./utils/removeClass');
var templater = require('./utils/templater');
var Map = require('./classes/Map');

var map = document.getElementById('map');

// var mapWidth = prompt('width');
// var mapHeight = prompt('height');
console.log('init map')
var MineMap = new Map(map,80,50);


