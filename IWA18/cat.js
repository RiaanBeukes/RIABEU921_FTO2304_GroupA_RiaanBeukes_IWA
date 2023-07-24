const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    event.dataTransfer.setData("text/plain", orderId);
  };

  const handleDragEnd = (event) => {
    updateDragging({ over: null });
    updateDraggingHtml({ over: null });
  };

  const handleHelpToggle = (event) => {
    const helpOverlay = html.help.overlay;
    if (helpOverlay.hasAttribute("open")) {
      helpOverlay.removeAttribute("open");
      html.other.help.focus();
    } else {
      helpOverlay.setAttribute("open", "");
      html.help.cancel.focus();
    }
  };

  const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay;
    if (addOverlay.hasAttribute("open")) {
      addOverlay.removeAttribute("open");
      html.other.add.focus();
      html.add.form.reset();
    } else {
      addOverlay.setAttribute("open", "");
      html.add.cancel.focus();
    }
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const table = formData.get("table");
  
    // Add your logic to create a new order using the title and table.
    // You can use the provided functions from data.js and view.js.
    // For example:
    // createOrder({ title, table });
  
    handleAddToggle(); // Close the add overlay after submission.
  };

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

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const id = formData.get("id");
    const title = formData.get("title");
    const table = formData.get("table");
    const column = formData.get("column");
  
    // Add your logic to update the order with the new information.
    // You can use the provided functions from data.js and view.js.
    // For example:
    // updateOrder({ id, title, table, column });
  
    handleEditToggle(); // Close the edit overlay after submission.
  };

const handleDelete = (event) => {
    const orderId = html.edit.form.elements["id"].value;
  
    // Add your logic to delete the order with the given orderId.
    // You can use the provided functions from data.js and view.js.
    // For example:
    // deleteOrder(orderId);
  
    handleEditToggle(); // Close the edit overlay after deletion.
  };
  
  