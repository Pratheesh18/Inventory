import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Item = ({ item, onEditItem, onDeleteItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    onEditItem(editedItem);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedItem({ ...item });
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    onDeleteItem(item._id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  return (
    <div className="item">
      <div className="item-details">
        {editMode ? (
          <Form>
            <Form.Group controlId="itemName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={editedItem.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="itemQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="quantity" value={editedItem.quantity} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="itemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" step="0.01" name="price" value={editedItem.price} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        ) : (
          <div>
            <h5>{item.name}</h5>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        )}
      </div>
      <div className="item-actions">
        {editMode ? (
          <div>
            <Button variant="success" onClick={handleSaveClick}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelClick}>
              Cancel
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="primary" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDeleteClick}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
