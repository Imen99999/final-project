
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const incrementButton = counter.querySelector(".increment");
    const decrementButton = counter.querySelector(".decrement");
    const countSpan = counter.querySelector(".count");
    const price = parseFloat(counter.getAttribute("data-price"));

    incrementButton.addEventListener("click", function() {
        const currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
            updateTotalPrice();
    });
    
    decrementButton.addEventListener("click", function() {
        const currentCount = parseInt(countSpan.textContent);
            if (currentCount > 0) {
                countSpan.textContent = currentCount - 1;
                updateTotalPrice();
            }
    });

    function updateTotalPrice() {
        const currentCount = parseInt(countSpan.textContent);
        const totalPrice = currentCount * price;
        counter.querySelector(".total-price").textContent = totalPrice + " DTN";
    }
});



const reserveButtons = document.querySelectorAll(".reserve-btn");
const cancelButtons = document.querySelectorAll(".cancel-btn");
const messageArea = document.querySelector(".message-area");

reserveButtons.forEach(button => {
     button.addEventListener("click", function() {
        messageArea.textContent = "Réservation confirmée";
    });
});

cancelButtons.forEach(button => {
    button.addEventListener("click", function() {
        messageArea.textContent = "Réservation annulée";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const datePickers = document.querySelectorAll(".date-picker");
    datePickers.forEach(input => {
        new Datepicker(input, {
            // Datepicker options can be configured here
        });
    });
});





