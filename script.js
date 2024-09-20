const originalAmount = '₱ 1,250.00'; // Store the original amount

function toggleBalance() {
    const amount = document.getElementById('amount');
    const toggleButton = document.getElementById('toggleButton');
    
    if (toggleButton.textContent === 'Hide') {
        amount.textContent = '*****'; // Change to asterisks
        toggleButton.textContent = 'Show'; // Change button text to "Show"
    } else {
        amount.textContent = originalAmount; // Show the original amount
        toggleButton.textContent = 'Hide'; // Change button text to "Hide"
    }
}
