/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */

import { updateDragging } from "./data.js";

const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return

    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
/*Mynote:When handleDragStart function is called. It retrieves the orderId of the dragged 
 *element and sets it as the data to be transferred.
 *"event.target.dataset.id;" --Extracts the value of the "data-id" attribute from the element
  that triggered the event.
 */
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    event.dataTransfer.setData("text/plain", orderId);
  };

/*Mynote:Handles the drag end event for an order element. It may involve cleaning up any visual 
 *effects applied during dragging or performing other actions related to the end of the 
 *drag operation.
 */
const handleDragEnd = (event) => {
    updateDragging({ over: null });
    updateDraggingHtml({ over: null});
};

/*Mynote:Handles the click event on the "Help" button. When the "Help" button is clicked, it will 
 *open or close the "Help" overlay, providing instructions on how to use the app.
 */
const handleHelpToggle = (event) => {
    const  helpOverlay = html.help.overlay;
    if (helpOverlay.hasAttribute("open")) {
       helpOverlay.removeAttribute("open");
       html.other.help.focus();
    } else {
       helpOverlay.setAtrribute("open", "");
       html.help.cancel.focus();
    }
};

/*Mynote:Handles the click event on the "Add Order" button. When the "Add Order" button is clicked, 
 *will open or close the "Add Order" overlay, allowing the user to enter order text and associated 
 *table for a new order.
 */
const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay;
    if (addOverlay.hasAttribute("open")) {
        addOverlay.removeAttribute("open");
        html.other.add.focus();
        html.add.form.reset();
    } else {
        addOverlay.setAttribute("open","");
        html.add.cancel.focus();
    } 
};

/*Mynote:Handles the form submission event within the "Edit Order" overlay. When the user submits the form 
 *by clicking the "Update" button, this function will be responsible for processing the form data, 
 *updating the relevant order details, and moving the order to the selected column if the status is changed.
 */
const handleAddSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const table = formData.get("table");
 
  
    handleAddToggle(); 
  };
  

//const handleEditToggle = (event) => {}
const handleEditToggle = (event) => {
    const orderId = event.target.dataset.id;
    const order = state.orders.find((order) => order.id === orderId);
  
    if (!order) return;
  
    const editOverlay = html.edit.overlay;
    const editForm = html.edit.form;
  
    // Populate the edit form with the order data.
    editForm.elements["id"].value = order.id;
    editForm.elements["title"].value = order.title;
    editForm.elements["table"].value = order.table;
    editForm.elements["column"].value = order.column;
  
    if (editOverlay.hasAttribute("open")) {
      editOverlay.removeAttribute("open");
      html.other.grid.focus();
    } else {
      editOverlay.setAttribute("open", "");
      html.edit.cancel.focus();
    }
  };
  
//const handleEditSubmit = (event) => {}
const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const id = formData.get("id");
    const title = formData.get("title");
    const table = formData.get("table");
    const column = formData.get("column");
   
  
    handleEditToggle(); //---------------------------------------
  };
  
//const handleDelete = (event) => {}
const handleDelete = (event) => {
    const orderId = html.edit.form.elements["id"].value;
  
 
     deleteOrder(orderId);
  
    handleEditToggle(); // Close the edit overlay after deletion.
  };
  

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}