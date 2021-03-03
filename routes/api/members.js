const express = require('express');
const router = express.Router();
const members = require('../../Members.js');

//Pega todos os membros.
router.get('/', (req, res)=>{
    res.json(members);
});

router.get('/:id', (req, res)=>{

    const found = members.some(member=>
        member.id === parseInt(req.params.id)
    );

    if(found) {
        res.json(members.filter(member =>{
            return member.id === parseInt(req.params.id); 
        }));
    }
    else{
        res.status(400).json({
            msg: `Member ${req.params.id} not found`
        })
    };
    
});

//Rota para criar membros

router.post('/', (req, res)=>{
    const newMember ={
        
    }
    res.send(req.body);
})

module.exports = router;