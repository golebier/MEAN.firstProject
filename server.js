//
//     Copyright (c) 1979, the Gra projects.
//     Please see the AUTHORS file for details.
//     All rights reserved.
//     Use of this source code is governed by a MIT-style license
//     that can be found in the LICENSE file.
//
//
//     @author Gra <Gołębiewski Radosław A.>
//             https://github.com/golebier or https://golebier.github.io
//             https://google.com/+RadoslawGolebiewski
//             http://www.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35
//

var http = require("http");

function onRequest(request, response) {
	console.log("Request received.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8888);
http.createServer(onRequest).listen(9999);

console.log("Server has started.");
