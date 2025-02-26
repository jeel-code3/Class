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

function testloop(){
            for(let i=0; i < 3; i++){
                if(i === 1){
                    return (`The value of i is ${i}`);
                }
            }
        }
        document.write(testloop());
        document.write(`<br><br>`);
        function isPrime(num){
            if(num <= 1){
                return false;
            }
            for(let i=2; i<num; i++){
                if(num % 2 ===0){
                    return false;
                }
            }
            return true;
        }
        for(let i=0; i<=10; i++){
            if (i=== 0){
                document.write(`${i} is zero<br><br>`);
            }else if(i%2 === 0){
                document.write(`${i} is an even number<br><br>`);
            }else if(isPrime(i)){
                document.write(`${i} is Prime number<br><br>`);
            }
            else{
                document.write(`${i} is odd number<br><br>`)
            }
        }
