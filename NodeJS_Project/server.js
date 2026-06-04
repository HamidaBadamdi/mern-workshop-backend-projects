var http = require('http')
var a = 100
var b = 200
http.createServer(function(req , res)
{
   // res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Hello World...</h1>\n")
    res.write("Value of a is: " + a + "<br>\n")
    res.write("Value of b is: " + b + "<br>\n")
    res.write("<h2>Sum of " + a + " and " + b + " is: " + (a+b) + "</h2>\n")        
    res.end('Bye!')

}).listen(4000)

console.log('Server Started on http://127.0.0.1:4000')