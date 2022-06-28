// let array = ["black", "white", "orange"]

// for (i= 2; i <array.length; i++){
//     console.log(array[2]);
// }
let output = document.getElementById('input-form'); // form

let billAmount = document.getElementById('bill-amount'); // Bill amount
let tipAmount = document.getElementById('tip-amount'); // Tip amount /person
let numberOfCustomers = document.getElementById('number-of-customers'); // Number of Customers
let totalAmount = document.getElementById('total-amount'); // Total amount /person
let tipPerPerson = document.getElementById('tip-per-person'); // Choose tip amount
let resetButton = document.getElementById('reset-button');// reset button

function formInput(billAmount,tipAmount,numberOfCustomers){
    this.billAmount = billAmount;
    this.tipAmount = tipAmount;
    this.numberOfCustomers = numberOfCustomers;
}

output.addEventListener('submit', function (e) {

e.preventDefault();

let bill = parseFloat(billAmount.value);

console.log(typeof (bill));

let tip = parseInt(tipAmount.value);

let customers = parseInt(numberOfCustomers.value);

let input = new formInput(bill, tip, customers);

window.localStorage.setItem('formInput', JSON.stringify(input));

calculate(input.billAmount, input.tipAmount, input.numberOfCustomers)

});

let calculate = (bill, tip, customers) => {

	let percentage = (tip / 100) * bill; // we need to get the percentage first


	let billPerPerson = percentage / customers;



	// divide the bill between customers and add tip at end
	let total = bill / customers + billPerPerson;

	// need to total to have 2 deciaml places :)
	total = total.toFixed(2);

	showResults(billPerPerson.toFixed(2), total) // pass our final amounts to display in browser

}


function showResults(tip,total) {

    tipAmount.innerHTML = tip;

    totalAmount.innerHTML = total;
}

// function reset() {
// 	totalAmount.innerHTML = '0.00'; // switch numbers to equal 0
// 	tipAmount.innerHTML = '0.00'; // switch numbers to equal 0
// 	output.reset(); // clear form
// 	window.localStorage.clear();
// }

