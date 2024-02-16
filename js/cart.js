const payBtn = document.querySelector('.btn-buy');

payBtn.addEventListener('click', () => {
    fetch('/stripe-checkout', {
        method: 'POST', // Use uppercase for HTTP methods
        headers: new Headers({'Content-Type': 'application/json'}), // Correct content type header
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem('cartItems')),
        }),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((url) => {
        // Use window.location.href to navigate to the new URL
        window.location.href = url;
    })
    
});
