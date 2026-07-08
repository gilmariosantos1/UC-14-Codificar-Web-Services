const express = require('express');

const app = express();

function autenticar(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    // Aqui você pode adicionar a lógica para verificar o token, por exemplo, usando JWT
    // Se o token for inválido, retorne um erro de autenticação
    // if (!validarToken(token)) {
    //     return res.status(403).json({ message: 'Token inválido' });
    // }
    next();
}

app.get("/usuarios",autenticar, (req, res) => {

   res.json([
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"   
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    }
   ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});