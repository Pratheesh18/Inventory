import React , {useState} from 'react';
import {Modal , Button,Form} from 'react-bootstrap';



const AddItemForm = ({showModal , onCloseModal , onAddItem}) => {
    const [name , setName] = useState('');
    const [quantity , setQuantity] = useState('');
    const [price,setPrice] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name : name,
            quantity : quantity,
            price : price
        };

        setName('');
        setQuantity('');
        setPrice('');
    };


    return(
        <Modal show={showModal} onHide={onCloseModal} >
            <Modal.header closeButton>
                <Modal.Title> Add Item </Modal.Title>
            </Modal.header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='name'>
                        <Form.Label> Name </Form.Label>
                        <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId='quantity'>
                        <Form.Label> Quantity </Form.Label>
                        <Form.Control type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId='price'>
                        <Form.Label type="number" step='0.01' value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </Form.Group>
                    <Button variant='primary' type='submit'>  Add Item </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
};


export default AddItemForm;