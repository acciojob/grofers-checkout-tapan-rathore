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
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
		
	td1.innerText = "Total Price";
	td2.innerText = sum;
	totalPrice.append(td1, td2)
	table.append(totalPrice)
	// console.log(sum, totalPrice)
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

