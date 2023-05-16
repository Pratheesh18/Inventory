import React , {useState} from 'react';
import {Button,Form,Modal} from 'react-bootstrap';


const Item = ({ item , onEditItem,onDeleteItem}) => {
    const [editMode , setEditMode] = useState(false);
    const [editedItem , setEditedItem] = useState({...item});
}