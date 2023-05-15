import React , {useState} from 'react';
import {ListGroup , Button , Modal , Form} from 'react-bootstrap';


const Item = ({item , onEditItem , onDeleteItem}) => {
    const [editing , setEditing] = useState(false);
    const [name , setName] = useState(item.name);
    const [quantity , setQuantity] = useState(item.quantity);
    const [price , setPrice] = useState(item.price);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        const updatedItem = {
            _id : item._id,
            name : name,
            quantity : quantity,
            price : price

        };

        onEditItem(updatedItem);
        setEditing(false);
    };

    const handleDelete = () => {
        onDeleteItem(item._id);
    };

    return(
        <ListGroup.Item>
            {!editing && (
                <>
                    <div>
                        <strong>  Name :  </strong> {item.name}
                    </div>
                    <div>
                        <strong> Quantity :  </strong> {item.quantity}
                    </div>
                </>
            )}
        </ListGroup.Item>
    )

}