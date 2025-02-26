//Create the function to validate the input and return the smallest number
function number(){
	let error = "";
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	let num3 = document.getElementById('num3').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	//First check if the inputs are empty
	if(num1 == '' || num2 == '' || num3 == ''){
		error = 'Your inputs are empty';
	}else if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
		error = 'Your input is invalid';
	}
	else{
		if (num1 < num2 && num1 < num3) {
			error = `The smallest number is ${num1}`;
		}else if(num2 < num1 && num2 < num3){
			error = `The smallest number is ${num2}`;
		}else if(num3 < num1 && num3 < num2){
			error = `The smallest number is ${num3}`;
		}
	}

	document.getElementById('error').innerHTML = error;

}