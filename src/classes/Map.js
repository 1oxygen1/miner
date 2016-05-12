var templater = require('../utils/templater');

function Map(map, width, height) {
    var CELL_SIZE = 30;
    var minesQ = 0;
    console.log('enter map');
    map.style.width = (CELL_SIZE*width)+'px';

    var mapArray = new Array(width*height);
    var mapArrayLength = mapArray.length;

    var cell = "<div id='#{id}' class='#{className}'>#{text}</div>";
    console.log('set maparray');
    for (var i = 0; i < mapArrayLength; i++) {
        mapArray[i] = Math.random() < 0.1 ? 1 : 0;
    }
    console.log('set newarray');
    var newArray = mapArray.map(function(el, i, arr){

        if (el) {

            minesQ++;
            return minesQ;
        }else{
            var minesCount = 0;

            if ((i+1)%width === 0) {
                if (arr[i-1]) minesCount++;
                if (arr[i+width-1]) minesCount++;
                if (arr[i-width-1]) minesCount++;
                if (arr[i-width]) minesCount++;
                if (arr[i+width]) minesCount++;
            } else if ((i+1)%width === 1) {
                if (arr[i+1]) minesCount++;
                if (arr[i+width+1]) minesCount++;
                if (arr[i-width+1]) minesCount++;
                if (arr[i-width]) minesCount++;
                if (arr[i+width]) minesCount++;
            } else{
                if (arr[i+1]) minesCount++;
                if (arr[i-1]) minesCount++;
                if (arr[i+width-1]) minesCount++;
                if (arr[i-width-1]) minesCount++;
                if (arr[i+width+1]) minesCount++;
                if (arr[i-width+1]) minesCount++;
                if (arr[i-width]) minesCount++;
                if (arr[i+width]) minesCount++;
            }
            return minesCount;
        }

    });

    console.log('build map');
    mapArray.forEach(function(el, i){
        el ? map.innerHTML += templater(cell, {id: 'cell' + (i+1), className: 'cell hide mine', text: 'M'}) : map.innerHTML += templater(cell, {id: 'cell' + (i+1), className: 'cell hide', text: newArray[i]});
    });
    console.log(' ta-da!');

    var mines = document.getElementById('mines');
    console.log(minesQ);
    mines.innerHTML = 'Mines:' + minesQ;
}

module.exports = Map;



