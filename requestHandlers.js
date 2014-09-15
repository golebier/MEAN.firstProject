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

var exec = require("child_process").exec;

function start() {
	console.log("Request handler 'start' was called.");
	var content = "empty";
	exec("ls -lah", function (error, stdout, stderr) {
		content = stdout;
	});
	return content;
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
