let database = firebase.database();
let boards = database.ref("boards");

boards.on("child_added", visBoard);

function visBoard(snapshot) {
	var key = snapshot.key;
	var board = snapshot.val();
	let main = document.querySelector("main");
	main.innerHTML = `<section id="todoSection">
	<a href="scrum.html?key=${key}&name=${board.name}">
	<div class="card">
	<div class="container">
	<h4>${board.name}</h4></div></div>
	</a>
	</section>` + main.innerHTML;
}

document.getElementById('addButton').onclick = function() {
	var boardName = prompt("What is the name of the board?");
	var board = {
		"name": boardName
	}
	boards.push(board);
}