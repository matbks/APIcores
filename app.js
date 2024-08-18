const express = require('express');
const app = express();

// Catálogo de cores com exemplos de tons similares
const catalogoDeCores = {
  azul: ['Azul Marinho', 'Ciano', 'Azul Celeste'],
  vermelho: ['Vermelho Sangue', 'Carmim', 'Escuro'],
  verde: ['Verde Musgo', 'Verde Limão', 'Verde Oliva'],
  amarelo: ['Amarelo Canário', 'Amarelo Ouro', 'Amarelo Limão']
};

app.get('/cores/:cor', (req, res) => {
  const cor = req.params.cor.toLowerCase(); // Normaliza a entrada para minúsculas
  const coresSimilares = catalogoDeCores[cor];

  if (coresSimilares) {
    res.json({ corSolicitada: cor, coresSimilares });
  } else {
    res.status(404).send({ erro: "Cor não encontrada no catálogo." });
  }
});

const porta = 5000;
app.listen(porta, () => {
  console.log("API iniciada na porta:", porta);
});
