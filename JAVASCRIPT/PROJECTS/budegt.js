let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const category = document.getElementById("category");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

let tempAmount = 0; 
let expenseCategories = {};

const updateBudget = () => {
  tempAmount = parseInt(totalAmount.value);
  if (isNaN(tempAmount) || tempAmount <= 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    amount.innerText = tempAmount;
    balanceValue.innerText = tempAmount;
    expenditureValue.innerText = "0";
    expenseCategories = {};
    totalAmount.value = "";
    updatePieChart();
  }
};
totalAmountButton.addEventListener("click", updateBudget);

const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement;
  let parentAmount = parseInt(parentDiv.querySelector(".amount").innerText);
  let expenseCategory = parentDiv.querySelector(".category").innerText;
  let currentExpense = parseInt(expenditureValue.innerText);
  let currentBalance = parseInt(balanceValue.innerText);

  if (edit) {
    productTitle.value = parentDiv.querySelector(".product").innerText;
    userAmount.value = parentAmount;
    category.value = expenseCategory;
  }

  expenditureValue.innerText = currentExpense - parentAmount;
  balanceValue.innerText = currentBalance + parentAmount;

  if (expenseCategories[expenseCategory]) {
    expenseCategories[expenseCategory] -= parentAmount;
    if (expenseCategories[expenseCategory] <= 0) delete expenseCategories[expenseCategory];
  }

  parentDiv.remove();
  updatePieChart();
};

const listCreator = (expenseName, expenseValue, expenseCategory) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  let dateTime = new Date().toLocaleString();
  sublistContent.innerHTML = `
    <p class="product">${expenseName}</p>
    <p class="amount">${expenseValue}</p>
    <p class="category">${expenseCategory}</p>
    <p class="time">${dateTime}</p>
  `;
  let editButton = document.createElement("button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.addEventListener("click", () => modifyElement(editButton, true));
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
    updatePieChart();
  });
  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);

  expenseCategories[expenseCategory] = (expenseCategories[expenseCategory] || 0) + expenseValue;
  updatePieChart();
};

checkAmountButton.addEventListener("click", () => {
  if (!userAmount.value || !productTitle.value || !category.value) {
    productTitleError.classList.remove("hide");
    return;
  }
  productTitleError.classList.add("hide");

  let expense = parseInt(userAmount.value);
  if (expense <= 0 || isNaN(expense)) return;

  let currentExpense = parseInt(expenditureValue.innerText) + expense;
  let currentBalance = tempAmount - currentExpense;

  if (currentBalance < 0) {
    alert("Warning! You have exceeded your budget.");
  }

  expenditureValue.innerText = currentExpense;
  balanceValue.innerText = currentBalance;

  listCreator(productTitle.value, expense, category.value);
  productTitle.value = "";
  userAmount.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  updatePieChart();
});

const ctx = document.getElementById("expenseChart").getContext("2d");
let expenseChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Remaining Budget"],
    datasets: [{
      data: [100],
      backgroundColor: ["#36A2EB"]
    }]
  }
});

const updatePieChart = () => {
  let remainingBudget = parseInt(balanceValue.innerText) || 0;
  let categoryLabels = Object.keys(expenseCategories);
  let categoryValues = Object.values(expenseCategories);

  expenseChart.data.labels = ["Remaining Budget", ...categoryLabels];
  expenseChart.data.datasets[0].data = [remainingBudget, ...categoryValues];

  expenseChart.data.datasets[0].backgroundColor = [
    "#36A2EB",
    ...categoryLabels.map((_, index) => `hsl(${index * 60}, 70%, 50%)`)
  ];

  expenseChart.update();
};
