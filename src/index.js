var addClass = require('./utils/addClass');
var removeClass = require('./utils/removeClass');
var templater = require('./utils/templater');
var Map = require('./classes/Map');

var map = document.getElementById('map');

// var mapWidth = prompt('width');
// var mapHeight = prompt('height');
console.log('init map')
var MineMap = new Map(map,20,20);


/*var blockk = document.getElementsByClassName('cell');
console.log(blockk);
blockk.style.display = 'none';

var block1 = document.getElementById('cell' + '1');
addClass(block1, 'hide');

for(var i = 1; i < 20; i++){
    var id = 'cell' + i;
    var blon = document.getElementById(id);
    addClass(blon, 'hide');
}*/

document.addEventListener('click', function(e){
    if (e.target.className.indexOf('cell') >= 0) {
        removeClass(document.getElementById(e.target.id), 'hide');
    }
});