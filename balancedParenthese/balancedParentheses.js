/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') { count++ }
        if (str[i] === ')') { count-- }
        if (count < 0) { return false}
    }
    if (count > 0) {
        return false;
    }
    return true;
    
};
