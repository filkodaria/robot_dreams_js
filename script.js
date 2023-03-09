let firstNum;
let secondNum;
firstNum = prompt('Enter first number');
secondNum = prompt('Enter second number');

let sum;
let diff;
let prod;
let quot;

sum = Number(firstNum) + Number(secondNum);
diff = firstNum - secondNum;
prod = firstNum * secondNum;
quot = firstNum / secondNum;

if (
	firstNum === '' ||
	secondNum === '' ||
	isNaN(firstNum) ||
	isNaN(secondNum)
) {
	alert('Please, enter numbers');
} else if (secondNum == 0) {
	alert('Second value cannot be null');
} else if (+firstNum < +secondNum) {
	if (confirm('Are you sure you want to continue?')) {
		alert(`Diff = ${diff}`);
	} 
} else {
	alert(`Sum = ${sum}, Diff = ${diff}, Prod = ${prod}, Quot = ${quot}`);
}
