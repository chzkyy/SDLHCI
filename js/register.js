function validasi_data(form) {	
	var email = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var alphaExp = /^[a-zA-Z]+$/; 
	var pass = /^[a-zA-Z0-9]+$/;

	if (form.user.value =="") {
		alert('Username cannot be empty!');
		form.user.focus();
		return false;
	}
	
	else if (form.fullname.value == "") {
		alert("Fullname cannot be empty!");
		form.user.focus();
		return false;
	}
	else if (form.password.value == "") {
		alert("Password cannot be empty!");
		form.password.focus();
		return false;
	} 
	
	else if (form.passid.value == "" ) {
		alert("Confirm password cannot be empty!");
		form.passid.focus();
		return false;
	} 

	else if (form.email.value == "" ) {
		alert("Email cannot be empty!");
		form.email.focus();
		return false;
	}

	else if (form.age.value == "" ) {
		alert("Age cannot be empty!");
		form.age.focus();
		return false;
	}
}