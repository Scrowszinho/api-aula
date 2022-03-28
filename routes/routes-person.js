const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(
   [{
        name: 'Luis',
        age: 22
    },
    {
        name: 'Matheus',
        age: 21
    }]);
});


router.post('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send('Post', id);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send('Delete', id);
});


router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send('Patch', id);
});


module.exports = router;