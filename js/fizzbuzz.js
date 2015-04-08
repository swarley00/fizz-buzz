$(document).ready(function() {
	var myBody = $("body");
	for (var i = 1; i <= 100; i++) {
		if ((i%3) === 0) {
			myBody.append(" fizz" + ", ");
		}
		else if ((i%5) === 0) {
			myBody.append(" buzz" + ", ");
		}
		else {
			myBody.append(i + ", ");
		}
	}
});