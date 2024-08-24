let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('categoryselect');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalamountCell = document.getElementById('total-amount');
addBtn.addEventListener('click', function() {
 const category = categorySelect.Value;
 const amount = Number(amountInput.Value);
 const date = dateInput.Value;


 if (category === '') {
 alert('Please select a category');
 return;
 }
 if (isNaN(amount) || amount <=0 ) {
 alert('Please select a category');
 return;
 }
 if(date === '') {
 alert('Please select a date')
 return;
 }
 expensesTableBody.push({category,amount,date});

 totalAmount +=amount;
 totalamountCell.textContent = totalAmount;

 const nexRow = expensesTableBody.insertRow();

 const categoryCell = newRow.insertcell();
 const amountCell = newRow.insertcell();
 const dateCell = newRow.insertcell();
 const deleteCell = newRow.insertcell();
 const deleteBtn = document.createElement('button');

 deleteBtn.textContent = 'Delete';
 deleteBtn.classList,add('delete-btn');
 deleteBtn.addEventListener('click',function(){
 expenses.spice(expense.indexOf(expense),1);

 totalAmount -= expense.amount;
 totalamountCell.textContent = totalAmount;

 expensesTableBody.removeChild(nexRow);
 });
 const expense = expense[expense.length - 1];
 categoryCell.textContent = expense.category;
 amountCell.textContent = expense.amount;
 dateCell.textContent = expense.date;
 deleteCell.appendChild(deleteBtn);


 });

 for (const expense of expenses){
 totalAmount += expense.amount;
 totalamountCell.textContent = totalAmount;
 
 const newRow = expensesTableBody.insertRow();
 const categoryCell = newRow.insertcell();
 const amountCell = newRow.insertcell();
 const dateCell = newRow.insertcell();
 const deleteCell = newRow.insertcell();
 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = 'Delete';
 deleteBtn.classList,add('delete-btn');
 deleteBtn.addEventListener('click',function(){
 expenses.spice(expense.indexOf(expense),1);

 totalAmount -= expense.amount;
 totalamountCell.textContent = totalAmount;

 expensesTableBody.removeChild(nexRow);
 });
 categoryCell.textContent = expense.category;
 amountCell.textContent = expense.amount;
 dateCell.textContent = expense.date;
 deleteCell.appendChild(deleteBtn);
 }
