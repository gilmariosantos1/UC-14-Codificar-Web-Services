import {geoLcation} from '@capacitor/geolocation';
import express from 'express';

app = express();


PORT = 3000;

const obterLocalizacao = async () => {

  return new Promise((resolve, reject) => {
    geoLcation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

app.get('/localizacao', async (req, res) => {
  try {
    const localizacao = await obterLocalizacao();
    res.json(localizacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a localização' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

