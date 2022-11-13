var fname = document.getElementById("fname");
fname.addEventListener("keyup", validatefName);

var lname = document.getElementById("lname");
lname.addEventListener("keyup", validatelName);

var email = document.getElementById("email");
email.addEventListener("keyup", validateEmail);

var submitButton = document.getElementById("submit");

var fnameError = document.getElementById("fname-error");
var lnameError = document.getElementById("lname-error");
var emailError = document.getElementById("email-error");

function validatefName(){
	var fname = document.getElementById("fname").value;
	if(fname.length == 0){
		fnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(fname.length < 3){
		fnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!fname.match(/^[A-Za-z]+$/)){
		fnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	fnameError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validatelName(){
	var lname = document.getElementById("lname").value;
	if(lname.length == 0){
		lnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(lname.length < 3){
		lnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!lname.match(/^[A-Za-z]+$/)){
		lnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	lnameError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateEmail(){
	var email = document.getElementById("email").value;
	if(lname.length == 0){
		emailError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(lname.length < 3){
		emailError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	emailError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}
function validate(){
	if(fnameError.innerHTML != '<i class="fa fa-check"></i>' || lnameError.innerHTML != '<i class="fa fa-check"></i>' || emailError.innerHTML != '<i class="fa fa-check"></i>'){
		submitButton.disabled = true;
	}
	else{
		submitButton.disabled = false;
	}
}