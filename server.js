const express = require('express');
const app = express();

// Serve os arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Inicia o servidor na porta 80
app.listen(80, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 80!');
    console.log('Acesse: http://localhost/index.html');
});