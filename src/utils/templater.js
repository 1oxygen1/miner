var _forEach = require('lodash').forEach;

module.exports = function(str, vars) {
    var string = str;

    _forEach(vars, function(val, key){
        string = string.replace('#{'+key+'}', val);
    });

    return string;
};
