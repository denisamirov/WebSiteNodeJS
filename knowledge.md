router.get('/:id/', function(req, res) {
    const {id} = req.params
    res.send(`Ваш ID - ${id}`);
    
})

req, res - последовательность имеет значение