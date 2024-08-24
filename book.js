document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    const bookingList = document.getElementById('booking-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}, Email: ${email}, Check-in: ${checkin}, Check-out: ${checkout}`;
    bookingList.appendChild(listItem);

    document.getElementById('form').reset();
});



// Get the advertisement container element
const adContainer = document.querySelector('.ad-container');

// Add an event listener to the call-to-action button
adContainer.querySelector('.ad-btn').addEventListener('click', () => {
  // Simulate a link click by navigating to a new page
  window.location.href = 'https://example.com/shop';
});
