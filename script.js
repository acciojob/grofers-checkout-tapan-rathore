const getSumBtn = document.createElement("button");
const table = document.querySelector("table")
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	
	let sum=0;
	for(let price of prices){
		sum+=Number(price.innerText);
	}

	const totalPrice = document.createElement("tr");
	const td = document.createElement("td");
	td.className = "prices"
		
	td.colSpan = 2; 
	td.innerText = `Total Price: ${sum}`;
	
	totalPrice.append(td)
	table.append(totalPrice);
	// console.log(sum, totalPrice)
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

