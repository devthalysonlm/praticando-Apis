import express from 'express';
import carRoutes from './carRoutes'; // Importando as rotas de carros

const app = express();
const port = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Usando as rotas de carros
app.use('/carros', carRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Gerenciador de Carros!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
