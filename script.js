items = document.getElementsByClassName("step-wizard-item");
current = items[0];
current.classList.add('current-item');

var fname = document.getElementById("fname");
fname.addEventListener("keyup", validatefName);

var lname = document.getElementById("lname");
lname.addEventListener("keyup", validatelName);

var ssn = document.getElementById("ssn");
ssn.addEventListener("keyup", validateSSN);

var education = document.getElementById("education");
education.addEventListener("click", displayInfo);
education.addEventListener("click", validate);

var schoolName = document.getElementById("schoolName");
schoolName.addEventListener("keyup", validateSN);

var schoolGraduationYear = document.getElementById("schoolGraduationYear");
schoolGraduationYear.addEventListener("keyup", validateSGY);

var higherName = document.getElementById("higherName");
higherName.addEventListener("keyup", validateHN);

var higherGraduationYear = document.getElementById("higherGraduationYear");
higherGraduationYear.addEventListener("keyup", validateHGY);

var higherDegreeEducation = document.getElementById("higherDegreeEducation");
higherDegreeEducation.addEventListener("click", validate);

var email = document.getElementById("email");
email.addEventListener("keyup", validateEmail);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("keyup", validatePhoneNumber);

var radioButton = document.getElementsByName("registered");
radioButton[0].addEventListener("click", validate);
radioButton[1].addEventListener("click", validate);

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showSecondForm);

var fnameError = document.getElementById("fname-error");
var lnameError = document.getElementById("lname-error");
var emailError = document.getElementById("email-error");
var ssnError = document.getElementById("ssn-error");
var schoolNameError = document.getElementById("schoolName-error");
var schoolGraduationYearError = document.getElementById("schoolGraduationYear-error");
var higherNameError = document.getElementById("higherName-error");
var higherGraduationYearError = document.getElementById("higherGraduationYear-error");
var phoneNumberError = document.getElementById("phoneNumber-error");

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
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.]/)){
		emailError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	emailError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateSSN(){
	var ssn = document.getElementById("ssn").value;
	if(ssn.length == 0){
		ssnError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!ssn.match(/^[0-9]+$/) || ssn.length < 11){
		ssnError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	ssnError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateSN(){
	var schoolName = document.getElementById("schoolName").value;
	if(schoolName.length == 0){
		schoolNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(schoolName.length < 1){
		schoolNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!schoolName.match(/^[A-Za-z]+$/)){
		schoolNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	schoolNameError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateHN(){
	var higherName = document.getElementById("higherName").value;
	if(higherName.length == 0){
		higherNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(higherName.length < 5){
		higherNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!higherName.match(/^[A-Za-z]+$/)){
		higherNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	higherNameError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateSGY(){
	var schoolGraduationYear = document.getElementById("schoolGraduationYear").value;
	if(schoolGraduationYear.length == 0){
		schoolGraduationYearError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!schoolGraduationYear.match(/^[0-9]+$/) || schoolGraduationYear.length < 4){
		schoolGraduationYearError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	schoolGraduationYearError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validateHGY(){
	var higherGraduationYear = document.getElementById("higherGraduationYear").value;
	if(higherGraduationYear.length == 0){
		higherGraduationYearError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!higherGraduationYear.match(/^[0-9]+$/) || higherGraduationYear.length < 4){
		higherGraduationYearError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	higherGraduationYearError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function displayInfo(){
	if(education.value == "Primary" || education.value == "Secondary" || education.value == "Vocational"){
		document.getElementById("schoolNameDiv").style.display = "flex";
		document.getElementById("schoolYearDiv").style.display = "flex";
		document.getElementById("HigherNameDiv").style.display = "none";
		document.getElementById("HigherYearDiv").style.display = "none";
		document.getElementById("HigherDegree").style.display = "none";
	}
	else if(education.value == "Higher"){
		document.getElementById("schoolNameDiv").style.display = "none";
		document.getElementById("schoolYearDiv").style.display = "none";
		document.getElementById("HigherDegree").style.display = "none";
		document.getElementById("HigherNameDiv").style.display = "flex";
		document.getElementById("HigherYearDiv").style.display = "flex";
	}
	if(education.value == "Higher"){
		document.getElementById("HigherDegree").style.display = "flex";
	}
}

function validatePhoneNumber(){
	var phoneNumber = document.getElementById("phoneNumber").value;
	if(phoneNumber.length == 0){
		phoneNumberError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	if(!phoneNumber.match(/^[0-9]+$/) || phoneNumber.length < 9){
		phoneNumberError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validate();
		return false;
	}
	phoneNumberError.innerHTML = '<i class="fa fa-check"></i>';
	validate();
	return true;
}

function validate(){
	if(fnameError.innerHTML != '<i class="fa fa-check"></i>'
	||
	lnameError.innerHTML != '<i class="fa fa-check"></i>'
	||
	emailError.innerHTML != '<i class="fa fa-check"></i>'
	||
	phoneNumberError.innerHTML != '<i class="fa fa-check"></i>'
	||
	ssnError.innerHTML != '<i class="fa fa-check"></i>'
	||
	(radioButton[0].checked == false && radioButton[1].checked == false)
	||
    education.value == "Choose Education"
	)
	{
		submitButton.disabled = true;
	}
	else{
		if(education.value == "Higher"){
			if(higherNameError.innerHTML != '<i class="fa fa-check"></i>' || higherGraduationYearError.innerHTML != '<i class="fa fa-check"></i>' || higherDegreeEducation.value == "Choose Education Degree"){
				submitButton.disabled = true;
			}
			else{
				submitButton.disabled = false;
			}
		}
		else if(education.value == "Primary" || education.value == "Secondary" || education.value == "Vocational"){
			if(schoolNameError.innerHTML != '<i class="fa fa-check"></i>' || schoolGraduationYearError.innerHTML != '<i class="fa fa-check"></i>'){
				submitButton.disabled = true;
			}
			else{
				submitButton.disabled = false;
			}
		}
		else{
			submitButton.disabled = true;
		}
		//submitButton.disabled = false;
	}
}

function showSecondForm(){
	form1 = document.getElementById("form1");
	form1.addEventListener("submit", function(e){
		e.preventDefault();
	})
	current.classList.remove('current-item');
	current = items[1];
	current.classList.add('current-item');
	firstForm = document.getElementById("form1");
	firstForm.style.display = "none";
	secondForm = document.getElementById("form2");
	secondForm.style.display = "block";
}

let objectDate = new Date();
let month = objectDate.getMonth()+1;
let day = objectDate.getDate();
var date = objectDate.getFullYear() + '-' + month + '-' + day;
document.getElementById('birthDate').valueAsDate = new Date();
document.getElementById("birthDate").max = date;

let arrow = document.getElementById("back");
arrow.addEventListener("click", previousPage);
function previousPage(){
	current.classList.remove('current-item');
	current = items[0];
	current.classList.add('current-item');
	firstForm = document.getElementById("form1");
	firstForm.style.display = "block";
	secondForm = document.getElementById("form2");
	secondForm.style.display = "none";
}

var licenseNumber = document.getElementById("LP");
var ownerID = document.getElementById("OID");
var VINNumber = document.getElementById("VIN");
var upcomingOwnerIDNumber = document.getElementById("uoidNumber");
var adress = document.getElementById("adress");
var spouseName = document.getElementById("spouseName");
var spouseSurname = document.getElementById("spouseSurname");
var spouseSSN = document.getElementById("spouseSSN");
var childrenNumber = document.getElementById("childrenNumber");

licenseNumber.addEventListener("keyup", validatelicense);
//licenseNumber.addEventListener("keyup", toUpperCase);
ownerID.addEventListener("keyup", validateOwnerID);
upcomingOwnerIDNumber.addEventListener("keyup", validateUOID);
VINNumber.addEventListener("keyup", validateVIN);
adress.addEventListener("keyup", validateAdress);
spouseName.addEventListener("keyup", validateSpouseName);
spouseSurname.addEventListener("keyup", validateSpouseSurname);
spouseSSN.addEventListener("keyup", validateSpouseSSN);
childrenNumber.addEventListener("click", addFields);

var checkBoxForm2 = document.getElementsByName("registered2");
checkBoxForm2[0].addEventListener("click", validateForm2);
checkBoxForm2[0].addEventListener("click", displayInfoForm2);

checkBoxForm2[1].addEventListener("click", validateForm2);
checkBoxForm2[1].addEventListener("click", displayInfoForm2);

var radioButton2 = document.getElementsByName("maritalStatus");
radioButton2[0].addEventListener("click", validateForm2);
radioButton2[0].addEventListener("click", displayInfoForm2);
radioButton2[1].addEventListener("click", validateForm2);
radioButton2[1].addEventListener("click", displayInfoForm2);

var submitButton2 = document.getElementById("submitForm2");
submitButton2.addEventListener("click", showThirdForm);

var LPerror = document.getElementById("LP-error");
var OIDerror = document.getElementById("OID-error");
var UOIDerror = document.getElementById("UOID-error");
var VINerror = document.getElementById("VIN-error");
var adresserror = document.getElementById("adress-error");
var spouseNameError = document.getElementById("spouseName-error");
var spouseSurnameError = document.getElementById("spouseSurname-error");
var spouseSSNError = document.getElementById("spouseSSN-error");

// function toUpperCase(){
	// let x = document.getElementById("LP");
	// x.value = x.value.toUpperCase();
// }

function validatelicense(){
	var licenseNumber = document.getElementById("LP").value;
	if(licenseNumber.length == 0 || licenseNumber.length < 3){
		LPerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!licenseNumber.match(/\D/)){
		LPerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	LPerror.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateOwnerID(){
	var ownerID = document.getElementById("OID").value;
	if(ownerID.length == 0){
		OIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!ownerID.match(/^[0-9]+$/)){
		OIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	OIDerror.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateUOID(){
	var upcomingOwnerIDNumber = document.getElementById("uoidNumber").value;
	if(upcomingOwnerIDNumber.length == 0){
		UOIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!upcomingOwnerIDNumber.match(/^[0-9]+$/)){
		UOIDerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	UOIDerror.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateVIN(){
	var VINNumber = document.getElementById("vinNumber").value;
	if(VINNumber.length == 0){
		VINerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(VINNumber.length < 3 || !VINNumber.match(/\d/) || !VINNumber.match(/\D/)){
		VINerror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	VINerror.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateAdress(){
	var adress = document.getElementById("adress").value;
	if(adress.length == 0){
		adresserror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(adress.length < 5 || !adress.match(/\d/) || !adress.match(/\D/) || !adress.match(/\./)){
		adresserror.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	adresserror.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateSpouseName(){
	var spouseName = document.getElementById("spouseName").value;
	if(spouseName.length == 0){
		spouseNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(spouseName.length < 2){
		spouseNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!spouseName.match(/^[A-Za-z]+$/)){
		spouseNameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	spouseNameError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateSpouseSurname(){
	var spouseSurname = document.getElementById("spouseSurname").value;
	if(spouseSurname.length == 0){
		spouseSurnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(spouseSurname.length < 2){
		spouseSurnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!spouseSurname.match(/^[A-Za-z]+$/)){
		spouseSurnameError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	spouseSurnameError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

function validateSpouseSSN(){
	var spouseSSN = document.getElementById("spouseSSN").value;
	if(spouseSSN.length == 0){
		spouseSSNError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	if(!spouseSSN.match(/^[0-9]+$/) || spouseSSN.length < 11){
		spouseSSNError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm2();
		return false;
	}
	spouseSSNError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm2();
	return true;
}

numberOfChildrenBefore = document.getElementById("childrenNumber").value

function addFields(){
	if(childrenNumber.value != numberOfChildrenBefore && numberOfChildrenBefore < childrenNumber.value){
		childrenDiv = document.getElementsByClassName("children");
		childrenCount = childrenDiv.length;
		const newDiv = document.createElement("div");
		newDiv.classList.add("input-group");
		newDiv.classList.add("children");
		const element = document.getElementById("main2");
		element.appendChild(newDiv);
		
		const newLabel = document.createElement("label");
		const node = document.createTextNode(childrenNumber.value + " Children Name");
		newLabel.appendChild(node);
		const newInput = document.createElement("input");
		newInput.setAttribute("type", "text");
		newInput.setAttribute("placeholder", "Enter " + childrenNumber.value + " Children Name");
		newInput.setAttribute("id", "childrenName"+childrenNumber.value);
		newDiv.appendChild(newLabel);
		newDiv.appendChild(newInput);
		//alert(childrenCount);
		//alert(numberOfChildrenBefore);
		//alert(childrenNumber.value);
		numberOfChildrenBefore = childrenNumber.value;
		numberOfChildrenBefore = numberOfChildrenBefore;
	}
	else if(numberOfChildrenBefore > childrenNumber.value){
		const list = document.getElementById("main2");
		length = list.length;
		list.removeChild(list.lastChild);
		numberOfChildrenBefore = childrenNumber.value;
	}
}

function validateForm2(){
	if((checkBoxForm2[0].checked == false && checkBoxForm2[1].checked == false) || adresserror.innerHTML != '<i class="fa fa-check"></i>' || (radioButton2[0].checked == false && radioButton2[1].checked == false)){
		submitButton2.disabled = true;
	}
	else if(checkBoxForm2[0].checked == true && (LPerror.innerHTML != '<i class="fa fa-check"></i>' || OIDerror.innerHTML != '<i class="fa fa-check"></i>')){
		submitButton2.disabled = true;
	}
	else if(checkBoxForm2[1].checked == true && (VINerror.innerHTML != '<i class="fa fa-check"></i>' || UOIDerror.innerHTML != '<i class="fa fa-check"></i>')){
		submitButton2.disabled = true;
	}
	else{
		if(radioButton2[0].checked == true && (spouseNameError.innerHTML != '<i class="fa fa-check"></i>' || spouseSurnameError.innerHTML != '<i class="fa fa-check"></i>' || spouseSSNError.innerHTML != '<i class="fa fa-check"></i>')){
		submitButton2.disabled = true;
		}
		else{submitButton2.disabled = false;}
	}
}

// function validate2Form2(){
	// if((checkBoxForm2[0].checked == false && checkBoxForm2[1].checked == false) || VINerror.innerHTML != '<i class="fa fa-check"></i>' || UOIDerror.innerHTML != '<i class="fa fa-check"></i>' || checkBoxForm2[0].checked == false){
		// submitButton2.disabled = true;
	// }
	// else{
		// submitButton2.disabled = false;
	// }
// }

function displayInfoForm2(){
	if(checkBoxForm2[0].checked){
		document.getElementById("license").style.display = "flex";
		document.getElementById("ownerID").style.display = "flex";
	}
	if(checkBoxForm2[1].checked){
		document.getElementById("VIN").style.display = "flex";
		document.getElementById("upcomingOwnerID").style.display = "flex";
	}
	if(!checkBoxForm2[0].checked){
		document.getElementById("license").style.display = "none";
		document.getElementById("ownerID").style.display = "none";
	}
	if(!checkBoxForm2[1].checked){
		document.getElementById("VIN").style.display = "none";
		document.getElementById("upcomingOwnerID").style.display = "none";
	}
	if(radioButton2[0].checked){
		document.getElementById("spouseN").style.display = "flex";
		document.getElementById("spouseS").style.display = "flex";
		document.getElementById("spouseSS").style.display = "flex";
	}
	if(radioButton2[1].checked){
		document.getElementById("spouseN").style.display = "none";
		document.getElementById("spouseS").style.display = "none";
		document.getElementById("spouseSS").style.display = "none";
	}
}

function showThirdForm(){
	form2 = document.getElementById("form2");
	form2.addEventListener("submit", function(e){
		e.preventDefault();
	})
	current.classList.remove('current-item');
	current = items[2];
	current.classList.add('current-item');
	form2.style.display = "none";
	thirdForm = document.getElementById("form3");
	thirdForm.style.display = "block";
}

let monthVacation = objectDate.getMonth()+1;
let dayVacation = objectDate.getDate();
var dateVacation = objectDate.getFullYear()-3 + '-' + monthVacation + '-' + dayVacation;
document.getElementById('vacationDate').valueAsDate = new Date();
document.getElementById("vacationDate").min = dateVacation;
dateVacation = objectDate.getFullYear() + '-' + monthVacation + '-' + dayVacation;
document.getElementById("vacationDate").max = dateVacation;

let arrow2 = document.getElementById("back2");
arrow2.addEventListener("click", previousPage2);
function previousPage2(){
	current.classList.remove('current-item');
	current = items[1];
	current.classList.add('current-item');
	thirdForm = document.getElementById("form3");
	thirdForm.style.display = "none";
	secondForm = document.getElementById("form2");
	secondForm.style.display = "block";
}

var work = document.getElementById("work");
var studyStage = document.getElementById("studyStage");
var studyCourse = document.getElementById("studyCourse");
var studyInstitution = document.getElementById("studyInstitution");
var jobInstitution = document.getElementById("jobInstitution");
var jobDuty = document.getElementById("jobDuty");
var reason = document.getElementById("reason");
var vacationDate = document.getElementById("vacationDate");
var expierence = document.getElementById("expierence");
var jobType = document.getElementById("jobType");
var jobArea = document.getElementById("jobArea");

work.addEventListener("click", displayInfoForm3);
work.addEventListener("click", validateForm3);
studyStage.addEventListener("click", validateForm3);
studyCourse.addEventListener("click", validateForm3);
jobType.addEventListener("click", validateForm3);
jobArea.addEventListener("click", validateForm3);
studyInstitution.addEventListener("keyup", validateStudyInstitution);
jobInstitution.addEventListener("keyup", validateJobInstitution);
jobDuty.addEventListener("keyup", validateJobDuty);
reason.addEventListener("keyup", validateReason);
expierence.addEventListener("keyup", validateExpierence);

var submitButton3 = document.getElementById("submitForm3");
//submitButton3.addEventListener("click", showThirdForm);

var studyInstitutionError = document.getElementById("studyInstitution-error");
var jobInstitutionError = document.getElementById("jobInstitution-error");
var jobDutyError = document.getElementById("jobDuty-error");
var reasonError = document.getElementById("reason-error");
var expierenceError = document.getElementById("expierence-error");

function validateStudyInstitution(){
	var studyInstitution = document.getElementById("studyInstitution").value;
	if(studyInstitution.length < 2){
		studyInstitutionError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	if(!studyInstitution.match(/^[A-Za-z]+$/)){
		studyInstitutionError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	studyInstitutionError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm3();
	return true;
}

function validateJobInstitution(){
	var jobInstitution = document.getElementById("jobInstitution").value;
	if(jobInstitution.length < 2){
		jobInstitutionError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	if(!jobInstitution.match(/^[A-Za-z]+$/)){
		jobInstitutionError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	jobInstitutionError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm3();
	return true;
}

function validateJobDuty(){
	var jobDuty = document.getElementById("jobDuty").value;
	if(jobDuty.length < 2){
		jobDutyError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	if(!jobDuty.match(/^[A-Za-z]+$/)){
		jobDutyError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	jobDutyError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm3();
	return true;
}

function validateReason(){
	var reason = document.getElementById("reason").value;
	if(reason.length < 10){
		reasonError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	if(!reason.match(/^[A-Za-z]+$/)){
		reasonError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	reasonError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm3();
	return true;
}

function validateExpierence(){
	var expierence = document.getElementById("expierence").value;
	if(expierence.length == 0){
		expierenceError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	if(!expierence.match(/^[0-9]+$/)){
		expierenceError.innerHTML = '<i class="fa fa-times" id="wrong" aria-hidden="true"></i>';
		validateForm3();
		return false;
	}
	expierenceError.innerHTML = '<i class="fa fa-check"></i>';
	validateForm3();
	return true;
}

function validateForm3(){
	if(work.value == "Choose Current State" || expierenceError.innerHTML != '<i class="fa fa-check"></i>'){
		submitButton3.disabled = true;
	}
	else{
		if(expierence.value == 0){
			document.getElementById("job-type").style.display = "none";
			document.getElementById("job-area").style.display = "none";
		}
		else{
			document.getElementById("job-type").style.display = "flex";
			document.getElementById("job-area").style.display = "flex";
		}
		if(work.value == "Studying" && (studyInstitutionError.innerHTML != '<i class="fa fa-check"></i>' || studyStage.value == "Choose Current Study Stage" || studyCourse.value == "Choose Current Study Course")){
			submitButton3.disabled = true;
		}
		else if(work.value == "Working" && (jobInstitutionError.innerHTML != '<i class="fa fa-check"></i>' || jobDutyError.innerHTML != '<i class="fa fa-check"></i>')){
			submitButton3.disabled = true;
		}
		else if(work.value == "Unemployed" && (reasonError.innerHTML != '<i class="fa fa-check"></i>')){
			submitButton3.disabled = true;
		}
		else{
			if(expierence.value != 0 && (jobType.value == "Choose Job Type" || jobArea.value == "Choose Job Area")){
				submitButton3.disabled = true;
			}
			else{
				submitButton3.disabled = false
			}
		}
	}
	// else if(checkBoxForm2[0].checked == true && (LPerror.innerHTML != '<i class="fa fa-check"></i>' || OIDerror.innerHTML != '<i class="fa fa-check"></i>')){
		// submitButton3.disabled = true;
	// }
	// else if(checkBoxForm2[1].checked == true && (VINerror.innerHTML != '<i class="fa fa-check"></i>' || UOIDerror.innerHTML != '<i class="fa fa-check"></i>')){
		// submitButton3.disabled = true;
	// }
	// else{
		// if(radioButton2[0].checked == true && (spouseNameError.innerHTML != '<i class="fa fa-check"></i>' || spouseSurnameError.innerHTML != '<i class="fa fa-check"></i>' || spouseSSNError.innerHTML != '<i class="fa fa-check"></i>')){
		// submitButton3.disabled = true;
		// }
		// else{submitButton3.disabled = false;}
	// }
}

function displayInfoForm3(){
	if(work.value == "Studying"){
		document.getElementById("studiesStage").style.display = "flex";
		document.getElementById("studiesCourse").style.display = "flex";
		document.getElementById("studiesInstitution").style.display = "flex";
		document.getElementById("jobInst").style.display = "none";
		document.getElementById("jobDut").style.display = "none";
		document.getElementById("unemployed").style.display = "none";
		document.getElementById("vacation").style.display = "none";
	}
	else if(work.value == "Working"){
		document.getElementById("studiesStage").style.display = "none";
		document.getElementById("studiesCourse").style.display = "none";
		document.getElementById("studiesInstitution").style.display = "none";
		document.getElementById("jobInst").style.display = "flex";
		document.getElementById("jobDut").style.display = "flex";
		document.getElementById("unemployed").style.display = "none";
		document.getElementById("vacation").style.display = "none";
	}
	else if(work.value == "Unemployed"){
		document.getElementById("studiesStage").style.display = "none";
		document.getElementById("studiesCourse").style.display = "none";
		document.getElementById("studiesInstitution").style.display = "none";
		document.getElementById("jobInst").style.display = "none";
		document.getElementById("jobDut").style.display = "none";
		document.getElementById("unemployed").style.display = "flex";
		document.getElementById("vacation").style.display = "none";
	}
	else if(work.value == "Maternity Leave"){
		document.getElementById("studiesStage").style.display = "none";
		document.getElementById("studiesCourse").style.display = "none";
		document.getElementById("studiesInstitution").style.display = "none";
		document.getElementById("jobInst").style.display = "none";
		document.getElementById("jobDut").style.display = "none";
		document.getElementById("unemployed").style.display = "none";
		document.getElementById("vacation").style.display = "flex";
	}
	// else if(education.value == "Higher"){
		// document.getElementById("schoolNameDiv").style.display = "none";
		// document.getElementById("schoolYearDiv").style.display = "none";
		// document.getElementById("HigherDegree").style.display = "none";
		// document.getElementById("HigherNameDiv").style.display = "flex";
		// document.getElementById("HigherYearDiv").style.display = "flex";
	// }
}
