document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form Submitted!');

    // Save & Retrieve input values
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;

    // Create a new list item to show the new items
    const li = document.createElement('li');
    li.textContent = `${expenseName}: ${expenseAmount}`;

    // Add the list item to the expense list
    document.getElementById('expenses').appendChild(li);

    // Clear input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});
