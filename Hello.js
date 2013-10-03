function Hello() {
	var name = document.getElementById("name").value;	
	var paragraph = document.createElement("p");
	var text = "Hello " + name + "! Have a nice day!";
	paragraph.innerHTML = text;
	
	document.getElementById("response").appendChild(paragraph);
}
