const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API HUB Backend rodando com sucesso!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});