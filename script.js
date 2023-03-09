let firstNum;
let secondNum;
firstNum = prompt("Enter first number");
secondNum = prompt("Enter second number");

let sum;
let diff;
let prod;
let quot;
sum = Number(firstNum) + Number(secondNum);
diff = Number(firstNum) - Number(secondNum);
prod = Number(firstNum) * Number(secondNum);
quot = Number(firstNum) / Number(secondNum);

alert(`Sum=${sum}, Diff=${diff}, Prod=${prod}, Quot=${quot}`);
