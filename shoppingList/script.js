var button = document.getElementById("btnEnter");
var input = document.getElementById("toDo");
var ul = document.getElementById("toDoList");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.addEventListener("click", init);
		input.value="";
}

function addListAfterClick(){
	if (inputLength() >0) {
		createListElement();
	}
}

function addListAfterEnter(event){
	if (inputLength() > 0 && event.keyCode===13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

var toDoItems = ul.querySelectorAll("li");
console.log(toDoItems);

//strike through elements on click

function init() {
		//initializes new element
		// if the item is clicked this toggles the selected class
		var finished = this.classList.toggle("selected");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			this.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	}
	// revert input value back to nothing
	input.value = "";

