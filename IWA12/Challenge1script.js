const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

function updateBookButtons(bookId) {
    const statusElement = document.querySelector(`#${bookId} .status`);
    const reserveButton = document.querySelector(`#${bookId} .reserve`);
    const checkoutButton = document.querySelector(`#${bookId} .checkout`);
    const checkinButton = document.querySelector(`#${bookId} .checkin`);

    const status = statusElement.textContent.trim();
    const statusProps = STATUS_MAP[status];
    /*statusElement refers to the object element being targeted.
     *textContent is a property that is used to get or set the text content of an HTML element.
      It represents the combined text content of an element and all its descendants.
     *.trim() is not mandatory but its a makesure to ensure spaces are eliminated.
    */

    statusElement.style.color = statusProps.color;
    reserveButton.disabled = !statusProps.canReserve; //canReserve variable is referencing DOM element button.
    checkoutButton.disabled = !statusProps.canCheckout;
    checkinButton.disabled = !statusProps.canCheckIn;
}

    /*Event listener to wait for HTML content to finish loading.
     * "DOMContentLoaded", function() is added to check if 
    */
ocument.addEventListener("DOMContentLoaded", function () {
    updateBookButtons("book1");
    updateBookButtons("book2");
    updateBookButtons("book3");
});
