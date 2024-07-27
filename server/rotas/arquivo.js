const banco =require('../banco/banco');
const express = require('express');
const fileUpload = require('express-fileupload');
const {PythonShell} = require('python-shell');
const cors = require("cors");
const router = express.Router();

router.use(cors());

router.use(fileUpload());

router.get('/api/arquivo', (req,res) =>{
    banco.selectObjetos((err,ListaObjetos)=>{
        if(err){
            console.log(err)
        }else{
           return res.json(ListaObjetos);
        }
    })
    
})
router.post('/api/arquivo', (req,res) =>{
    const arquivo = req.body;
    const objeto = arquivo.objetos
    let dia = new Date().toISOString().slice(0, 10)
    banco.insertObjetos(objeto,dia,(err,resultado) =>{
            if(err){
                console.log(err)
            }else{
                res.json("Cadastro com sucesso")
            }
    });
 
})

router.get('/api/foto',(req,res) =>{
   return res.json();

})

router.post('/api/foto',(req,res) =>{
    const foto = req.files;
    const nome = foto.arquivo.name;
    const options = {
        scriptPath:'C:/Projeto2/Opencv/',
        args:nome
    }
    PythonShell.run("objDetection.py",options,(err,res)=>{
        if(err) console.log(err);
        if(res) console.log(res);
    })
    return res.json("Sucesso");

})

module.exports = router;