let database = firebase.database();

var todoElements = document.getElementById('todoElements');
var inprogressElements = document.getElementById('inprogressElements');
var finishedElements = document.getElementById('finishedElements');

var boardName = getParameterByName("name");
document.getElementById("title").innerHTML = boardName;

var key = getParameterByName('key');
if (key != null) {
    var todo = database.ref("boards/" + key + "/todo");
    var inprogress = database.ref("boards/" + key + "/inprogress");
    var finished = database.ref("boards/" + key + "/finished");
    todo.on("child_added", updateTodo);
    inprogress.on("child_added", updateInprogress);
    finished.on("child_added", updateFinished);
} else {
    alert("errror");
}

document.getElementById("addButton").onclick = function() {
    var textToAdd = prompt("What is the task you want to add?");
    let taskToAdd = {
        "text": textToAdd
    };
    todo.push(taskToAdd);
};

function updateTodo(snapshot) {
    var object = snapshot.val();
    todoElements.innerHTML = `
	<div class="card">
        <div class="container">
            <p>${object.text}</p>
         </div>
         <button onClick="moveToProgress('${snapshot.key}', '${object.text}')" class="setButton">SET TO INPROGRESS</button>
    </div>` + todoElements.innerHTML;
}

function updateInprogress(snapshot) {
    var object = snapshot.val();
    inprogressElements.innerHTML = `
	<div class="card">
        <div class="container">
            <p><strong>Developer: ${object.developer}</strong></p>
            <p>${object.text}</p>
         </div>
         <button onClick="moveToFinished('${snapshot.key}', '${object.text}', '${object.developer}')" class="setButton">SET TO FINISHED</button>
    </div>` + inprogressElements.innerHTML;
}

function updateFinished(snapshot) {
    var object = snapshot.val();
    finishedElements.innerHTML = `
	<div class="card">
        <div class="container">
            <p><strong>Developer: ${object.developer}</strong></p>
            <p>${object.text}</p>
         </div>
    </div>` + finishedElements.innerHTML;
}

function moveToProgress(itemKey, text) {
    database.ref("boards/" + key + "/todo/" + itemKey).remove();
    let taskToAdd = {
        "developer": prompt("What is your name? (Used to keep track over what the other developers are doing)"),
        "text": text
    };
    inprogress.push(taskToAdd).then(function(){
    	location.reload();
    });
}

function moveToFinished(itemKey, text, developer) {
    database.ref("boards/" + key + "/inprogress/" + itemKey).remove();
    let taskToAdd = {
        "developer": developer,
        "text": text
    };
    console.log(taskToAdd);
    finished.push(taskToAdd).then(function(){
    	location.reload();
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}