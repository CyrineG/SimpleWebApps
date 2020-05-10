


function isUserValid(username, password) {
	for(var i=0; i <database.length; i++){
		if (username === database[i].username && 
			password === database[i].password){
		
		return true;
	}
}
	return false;
	
}

function signIn(username, password) {
	if (isUserValid(username,password)){
		
		console.log(newsFeed);	}
	else {
		alert("error logging in");
	}
	
}


var database = [
	{
		username: "andrei",
		password: "123"
	},

	{
		username: "sally",
		password: "123"
	},

	{
		username: "ingred",
		password: "123"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "so tired from all the learning"
	},

	{
		username: "Sally",
		timeline: "javascript is so fun!"
	}
];

var userNamePrompt = prompt("what's you username?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt,passwordPrompt);






