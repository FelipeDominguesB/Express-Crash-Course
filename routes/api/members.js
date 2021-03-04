const express = require('express');
const uuid = require('uuid');
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
        id: uuid.v4(),
        nome: req.body.name,
        email: req.body.email,
        idade: req.body.idade,
        Genero: req.body.genero,
        Cidade: req.body.cidade
    }

    if(!newMember.nome || !newMember.email)
    {
        return res.status(400).json({
            msg: 'Inclua nome e email na requisição'
        });
    }
    
    members.push(newMember);
    res.json(members);
})

router.put('/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));  

    if(found)
    {
        const updtMember = req.body;
        members.forEach(member=>{
            if(member.id === parseInt(req.params.id))
            {
                member.nome = updtMember.nome ? updtMember.nome : member.nome;
                member.email = updtMember.email ? updtMember.email : member.email;
            
            res.json({msg: 'Cadastro atualizado', member});
            }
        });
    }
    else
    {

    }
});

router.delete('/:id', (req, res)=>{

    const found = members.some(member=>
        member.id === parseInt(req.params.id)
    );

    if(found) {
        res.json({
            msg: 'Usuario excluido',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    else{
        res.status(400).json({
            msg: `Member ${req.params.id} not found`
        })
    };
    
});

module.exports = router;