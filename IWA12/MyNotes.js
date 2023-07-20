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

/* document:Refers to the Document object in JS, it represents the HTML
   document displayed in the browser window.
 * querySelector(): This is a method of the Document object that allows you to select elements
   within the document using a CSS-style selector. 
   --It returns the first element that matches the specified selector.
 * #${bookId} .status: This is the CSS-style selector passed as an argument to querySelector().
 * #: This is a CSS selector for an element with a specific ID attribute.
 * ${bookId}: This is a JavaScript template literal that represents the value of a variable
   called bookId. The variable holds the ID of the book that you want to select. For example, 
   if bookId is "book1," the selector becomes #book1.
 * .: This is a CSS selector for an element with a specific class name.".status/.reserve/..etc".
 * status/reserve..etc: This is the class names we are targeting, which is ".status/.reserve/..etc".
 */
    const status = statusElement.textContent.trim();
    const statusProps = STATUS_MAP[status];
/*statusElement refers to the object element being targeted.
 *textContent is a property that is used to get or set the text content of an HTML element.
  It represents the combined text content of an element and all its descendants.
 *.trim() is not mandatory but its a makesure to ensure spaces are eliminated.  */

/* ***In here:--const statusProps = STATUS_MAP[status];-- we say [status] as we are calling up the id
      in html, under the STATUS_MAP object. 
     *This is then assigned to statusProps, which in turn is used to
*/
    statusElement.style.color = statusProps.color;
    reserveButton.disabled = !statusProps.canReserve;
    checkoutButton.disabled = !statusProps.canCheckout;
    checkinButton.disabled = !statusProps.canCheckIn;
}

document.addEventListener("DOMContentLoaded", function () {
    updateBookButtons("book1");
    updateBookButtons("book2");
    updateBookButtons("book3");
});
/*code provided uses document.addEventListener to add an event listener for the 
  DOMContentLoaded event. The event listener's function will be executed only when the entire
  HTML document has been loaded. This ensures that any code inside the event listener will run
  after all the necessary elements are available in the DOM.
 *THis also means any other code extra needs to be placed underneath the addEventListener.
 
 *Code inside this function will run after the HTML document is fully loaded.
 *Call the updateBookButtons function here for each book.
 
 *reserveButton: This variable is referencing a DOM element button.
 *statusProps: This variable is assumed to hold an object that contains properties related to the 
  status of the book. It is derived from the STATUS_MAP object based on the book's current status.
  Props stands for properties and is often used in JS.
 *statusProps.canReserve: This is a property of the statusProps object that represents whether the
  book can be reserved. It is expected to be a boolean value (either true or false).
 
  *!statusProps.canReserve: The ! (logical NOT) operator negates the value of statusProps.canReserve.
   So if canReserve is true, !statusProps.canReserve will be false, and vice versa.
  *reserveButton.disabled = !statusProps.canReserve;: This line of code sets the disabled property 
   of the reserveButton element based on the value of !statusProps.canReserve. 
  *If canReserve is true,!statusProps.canReserve is false, and thus reserveButton.disabled will be set
   to false, enabling the button. If canReserve is false, !statusProps.canReserve is true, and thus
   reserveButton.disabled will be set to true, disabling the button.
 */
