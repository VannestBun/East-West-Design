let counter = 0;
let counter2 = 0;
const counterValue = document.querySelector('.counter-value');
const counterValue2 = document.querySelector('.counter-value2');
const firstName = document.getElementById('first-Name');
const lastName = document.getElementById('last-Name');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zipcode = document.getElementById('zipcode');
const form = document.getElementById('form')



// Data validation Function
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if all fields are filled
    if (firstName.value === '' || lastName.value === '' || address.value === '' || city.value === '' || zipcode.value === '') {
        alert('Please fill in all the required fields.');
    } else {
        // All fields are filled, redirect to the "thankyou.html" page
        window.location.href = 'thankyou.html';
    }
});

// Back button click event listener
const backButton = document.querySelector('.btn-summary button:last-child');
backButton.addEventListener('click', function() {
    // Redirect to the "shoppingcart-page.html" page
    window.location.href = 'shoppingcart-page.html';
});





// Increment functions addition and subtraction
function minusButton() {
    if (counter > 0) {
      counter -= 1;
      counterValue.textContent = counter;
    }
  }

function plusButton() {
counter += 1;
counterValue.innerHTML = counter;
}

function minusButton2() {
    if (counter2 > 0) {
      counter2 -= 1;
      counterValue2.textContent = counter2;
    }
  }

function plusButton2() {
counter2 += 1;
counterValue2.innerHTML = counter2;
}







