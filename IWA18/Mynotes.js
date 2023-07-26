/*
handleDragEnd: 
Handle the drag end event for an order element. 

handleHelpToggle: 
Handle the click event on the "Help" button. 
When the "Help" button is clicked, it will open or close the "Help" overlay, 
providing instructions on how to use the app.

handleAddToggle: 
Handle the click event on the "Add Order" button. 
When the "Add Order" button is clicked, it will open or close the "Add Order" overlay, 
allowing the user to enter order text and associated table for a new order.

handleAddSubmit: 
Handle the form submission event within the "Add Order" overlay. 
When the user submits the form by clicking the "Add" button, this function will be responsible
for processing the form data, adding a new order to the "Ordered" column, and closing the 
"Add Order" overlay.

handleEditToggle: 
Handle the click event on an existing order element.
When an order element is clicked, it will open or close the "Edit Order" overlay,
allowing the user to edit the order details.

handleEditSubmit: 
Handle the form submission event within the "Edit Order" overlay. 
When the user submits the form by clicking the "Update" button, this function will be responsible 
for processing the form data, updating the relevant order details, and moving the order to the 
selected column if the status is changed.

handleDelete: 
This function will handle the click event on the "Delete" button within the "Edit Order" overlay. 
When the "Delete" button is clicked, this function will remove the order entirely, closing the 
"Edit Order" overlay 
*/