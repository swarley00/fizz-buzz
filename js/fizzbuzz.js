$(document).ready(function() {
	var myBody = $("body");
	for (var i = 1; i <= 100; i++) {
		if (i%3 === 0) {
			console.log("fizz");
		}
		else if (i%5 === 0) {
			console.log("buzz");
		}
		// else if (i%5) {
		// 	console.log("buzz");
		// 	// myBody.append("buzz");
		// }
		// else {
		// 	console.log(i);
		// }
	}
});