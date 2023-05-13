var http = require('http'); // inport ettik (içeriye aktardik).
var currentDate = require('./mymodule')

//import upper from "upper-case";  ----> alttaki ile ayni anlama geliyor
var upper = require('upper-case'); 



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(req.url);
    res.write(upper.upperCase(req.url));
    //res.write('current date is: ' + currentDate.curDate());
    //res.write('Hello Node js - write method');
    //res.end('  Hello Node js - end method');

}).listen(1111) // 1111 = port numarasi 


