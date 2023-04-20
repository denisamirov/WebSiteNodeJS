const express = require('express')
const router = express.Router()


router.get('/:id/', function(req, res) {
    const {id} = req.params
    res.send(`Ваш ID - ${id}`);
    
})

module.exports=router;

