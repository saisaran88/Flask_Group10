let cart = [];

function add_to_cart(item, Quantity, price) {
	var amount = Quantity * price;
	cart.push({ item, Quantity, price, amount })
	console.log(item);
	console.log(Quantity);
	console.log(price);
	console.log(amount);
	alert("The item " + item + " has been added to the cart");
	getCartItems();
}

function addElementsTable() {
	let myCart = document.getElementById('table');
	let headers = ['Item', 'Quantity', 'Price', 'Amount']
	let table = document.createElement('table');
	table.setAttribute('id', 'cartTable')
	let headerRow = document.createElement('tr');
	headers.forEach(headerText => {
		let header = document.createElement('th');
		let textNode = document.createTextNode(headerText);
		header.appendChild(textNode);
		headerRow.appendChild(header);
	});

	table.appendChild(headerRow);
	let TotalCartAmount = 0;
	cart.forEach(item => {
		let row = document.createElement('tr');
		let itemValues = Object.values(item);
		itemValues.forEach(text => {
			let cell = document.createElement('td');
			let cellValue = document.createTextNode(text);
			cell.appendChild(cellValue);
			row.appendChild(cell);
		});
		TotalCartAmount = TotalCartAmount + item.amount;
		table.appendChild(row)
	});
	let row = document.createElement('tr');
	let cell = document.createElement('td');
	cell.setAttribute('colspan', 3)
	let cellValue = document.createTextNode("Total Bill: ");
	cell.appendChild(cellValue);
	row.appendChild(cell)

	let bill = document.createElement('td');
	bill.setAttribute('id', 'billamount');
	let billValue = document.createTextNode(TotalCartAmount.toFixed(2));
	bill.appendChild(billValue);
	row.appendChild(bill);

	table.appendChild(row);

	let orderrow = document.createElement('tr');
	let ordercell = document.createElement('td');
	ordercell.setAttribute('colspan', 4);
	const link = document.createElement('a');
	link.setAttribute('href', '/home');
	link.setAttribute('onclick', 'placeOrder()');
	link.textContent = "Place Order"
	link.style.backgroundColor = 'green';
	link.style.color = 'white';
	link.style.padding = '10px 20px';
	link.style.borderRadius = '5px';
	link.style.textAlign = 'center';
	ordercell.appendChild(link);
	orderrow.appendChild(ordercell)


/*
	let data = document.createElement('td');
	const link = document.createElement('a');
	link.setAttribute('href', '../index.html');
	link.setAttribute('onclick', 'placeOrder()');
	link.textContent = "Place Order"
	link.style.backgroundColor = 'green';
	link.style.color = 'white';
	link.style.padding = '10px 20px';
	link.style.borderRadius = '5px';
	data.appendChild(link);
	row.appendChild(data);
	table.appendChild(row);*/

	/*
	let btn = document.createElement('a');
	btn.setAttribute('href', '../index.html');
	btn.setAttribute('onclick', 'placeOrder()');
	btn.textContent('Place order')
	cell.appendChild(btn);
	row.appendChild(cell);
	console.log('anchor tag created');*/
	table.appendChild(orderrow)
	myCart.appendChild(table);

}
function getCartItems() {

	let myCart = document.getElementById('table');
	let htmlTable = document.getElementById('cartTable');
	if (htmlTable) {
		htmlTable.parentNode.removeChild(htmlTable);
		addElementsTable();
	}
	else {
		addElementsTable();
	}

}

function placeOrder() {
	alert("Your order has been succesfully Placed ")
}