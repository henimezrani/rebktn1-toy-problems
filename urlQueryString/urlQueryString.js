/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var result = [];
    var str="";
    var query = url.slice(url.indexOf('?')+1);
    for (var i = 0 ; i < query.length ; i++){
        if (((query[i].match(/\W/)) && query[i] !== '=') && (str.length>0)){
            if (query[i] === '%'){
                i += 2;
                str += ' ';
            }else {
                result.push(str);
                str="";
            }
        } else {
            str +=query[i]
        }
    }
    result.push(str);
    for (var i = 0 ; i < result.length ; i++){
        result[i] = result[i].split('=')
    }
    return result
}
