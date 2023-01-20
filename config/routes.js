const express = require('express');
const routes = express.Router();

let db = [
    { '1': {Nome: 'Cliente 1', Idade: '20'} },
    { '2': {Nome: 'Cliente 2', Idade: '20'} },
    { '3': {Nome: 'Cliente 3', Idade: '20'} }
]

routes.get('/clientes', (req, res) => {
    return res.json(db);
})

routes.post('/clientes', (req, res) => {
    const body = req.body;
    if(!body) {
        return res.status(400).end();
    }
    db.push(body);
    return res.json(db);
})

routes.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;

    let newDb = db.filter(cliente => {
        if(!cliente[id]) {
            return cliente;
        }
    })
    db =newDb;
    
    return res.send(db)
})

module.exports = routes;