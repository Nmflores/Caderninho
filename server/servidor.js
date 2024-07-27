const express = require('express');
const arquivoRouter = require('./rotas/arquivo');
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json())

app.use(arquivoRouter);

app.listen(port,() => {
    console.log("Servidor iniciado ..");
})