const express = require('express');
const Item = require('../models/item');

const router = express.Router();


router.post('/',(req,res) => {
    const newItem = req.body;
    Item.create(newItem)
        .then(() => res.status(201).json({message:'Item created successfully'}))
        .catch((error) => res.status(500).json({message:'Failed to create item',error}))

});


router.get('/',(req,res) => {
    Item.find()
        .then((items) => res.status(200).json(items))
        .catch((error) => res.status(500).json({message: 'Failed to retreive items',error}))

});


router.get('/:id',(req,res) => {
    const itemId = req.params.id;
    Item.findById(itemId)
        .then((item) => {
            if(!item){
                res.status(404).json({message : 'Item not found'});
            }else{
                res.status(200).json(item);
            }
        })
        .catch((error) => res.status(500).json({message : 'Failed to retreive item',error}));

})

router.put('/:id', (req,res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    Item.findByIdAndUpdate(itemId , updatedItem)
        .then(() => res.status(200).json({message:'Item updated'}))
        .catch((error) => res.status(500).json({message:'Failed to update'}))
});

router.delete('/:id',(req,res) => {
    const itemId = req.params.id;
    Item.findByIdAndDelete(itemId)
         .then(() => res.status(200).json({message : 'Item deleted'}))
         .catch((error) => res.status(500).json({message : 'failed to delete'}))
});


module.exports = router;