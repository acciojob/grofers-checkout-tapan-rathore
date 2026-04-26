const getSumBtn = document.createElement("button");
const tbody = document.querySelector("tbody")
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".prices");
	
	let sum=0;
	for(let price of prices){
		sum+=Number(prices.innerText);
	}

	const tr = document.createElement("tr");
	const td = document.createElement("td");
		
	td.colSpan = 2; 
	td.className = "prices"
	td.innerText = sum;
	
	tr.append(td)
	tbody.append(tr);
	// console.log(sum, tr)
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

