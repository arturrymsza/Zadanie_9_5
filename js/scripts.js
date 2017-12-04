var buttonClass = document.getElementsByClassName('button');
var buttonLength = buttonClass.length;
for (var i = 0; i < buttonLength; i++) {
	alert(buttonClass[i].innerText);
}