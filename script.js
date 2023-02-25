let firstName;
let secondName;
firstName = prompt('Enter first number');
secondName = prompt('Enter second number');

let sum;
let diff;
let prod;
let quot;
sum = Number(firstName) + Number(secondName);
diff = Number(firstName) - Number(secondName);
prod = Number(firstName) * Number(secondName);
quot = Number(firstName) / Number(secondName);

alert(`Sum=${sum}, Diff=${diff}, Prod=${prod}, Quot=${quot}`);
