let arrow = document.getElementById("back");
arrow.addEventListener("click", previousPage);
function previousPage(){
	window.location="index.html";
}

var licenseNumber = document.getElementById("LP");
var ownerID = document.getElementById("OID");
var VINNumber = document.getElementById("VIN");
var upcomingOwnerIDNumber = document.getElementById("uoidNumber");

licenseNumber.addEventListener("keyup", validatelicense);
licenseNumber.addEventListener("keyup", toUpperCase);
ownerID.addEventListener("keyup", validateOwnerID);
upcomingOwnerIDNumber.addEventListener("keyup", validateUOID);
VINNumber.addEventListener("keyup", validateVIN);

var radioButton = document.getElementsByName("registered");
radioButton[0].addEventListener("click", validate);
radioButton[0].addEventListener("click", displayInfo);

radioButton[1].addEventListener("click", validate2);
radioButton[1].addEventListener("click", displayInfo);

var submitButton = document.getElementById("submit");

var LPerror = document.getElementById("LP-error");
var OIDerror = document.getElementById("OID-error");
var UOIDerror = document.getElementById("UOID-error");
var VINerror = document.getElementById("VIN-error");

function toUpperCase(){
	let x = document.getElementById("LP");
	x.value = x.value.toUpperCase();
}

function validatelicense(){
	var licenseNumber = document.getElementById("LP").value;
	if(licenseNumber.length == 0){
		LPerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(licenseNumber.length < 2){
		LPerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!licenseNumber.match(/\d/) || !licenseNumber.match(/\D/)){
		LPerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	LPerror.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateOwnerID(){
	var ownerID = document.getElementById("OID").value;
	if(ownerID.length == 0){
		OIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!ownerID.match(/^[0-9]+$/) || ownerID.length < 11){
		OIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	OIDerror.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateUOID(){
	var upcomingOwnerIDNumber = document.getElementById("uoidNumber").value;
	if(upcomingOwnerIDNumber.length == 0){
		UOIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate2();
		return false;
	}
	if(!upcomingOwnerIDNumber.match(/^[0-9]+$/) || upcomingOwnerIDNumber.length < 11){
		UOIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate2();
		return false;
	}
	UOIDerror.innerHTML = '<i class="fa fa-check"></i>';
	validate2();
	return true;
}

function validateVIN(){
	var VINNumber = document.getElementById("vinNumber").value;
	if(VINNumber.length == 0){
		VINerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate2();
		return false;
	}
	if(!VINNumber.match(/\d/) || !VINNumber.match(/\D/) || VINNumber.length < 17){
		VINerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate2();
		return false;
	}
	VINerror.innerHTML = '<i class="fa fa-check"></i>';
	validate2();
	return true;
}

function validate(){
	if((radioButton[0].checked == false && radioButton[1].checked == false) || LPerror.innerHTML != '<i class="fa fa-check"></i>' || OIDerror.innerHTML != '<i class="fa fa-check"></i>'){
		submitButton.disabled = true;
	}
	else{
		submitButton.disabled = false;
	}
}

function validate2(){
	if((radioButton[0].checked == false && radioButton[1].checked == false) || VINerror.innerHTML != '<i class="fa fa-check"></i>' || UOIDerror.innerHTML != '<i class="fa fa-check"></i>'){
		submitButton.disabled = true;
	}
	else{
		submitButton.disabled = false;
	}
}

function displayInfo(){
	if(radioButton[0].checked){
		document.getElementById("VIN").style.display = "none";
		document.getElementById("upcomingOwnerID").style.display = "none";
		document.getElementById("license").style.display = "flex";
		document.getElementById("ownerID").style.display = "flex";
		document.getElementById("insurance").style.display = "flex";
		document.getElementById("insuranceDuration").style.display = "flex";
	}
	else if(radioButton[1].checked){
		document.getElementById("license").style.display = "none";
		document.getElementById("ownerID").style.display = "none";
		document.getElementById("VIN").style.display = "flex";
		document.getElementById("upcomingOwnerID").style.display = "flex";
		document.getElementById("insurance").style.display = "flex";
		document.getElementById("insuranceDuration").style.display = "flex";
	}
}
let objectDate = new Date();
let month = objectDate.getMonth()+1;
var date = objectDate.getFullYear() + '-' + month + '-' + objectDate.getDate();
document.getElementById('insuranceDate').valueAsDate = new Date();
document.getElementById("insuranceDate").min = date;
