import { useState, type FC } from 'react';
import {Geolocation} from '@capacitor/geolocation';
import { IonButton } from '@ionic/react';

const GeoLocation: FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const obterLocalizacao = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setErrorMessage(null);
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    } catch (error) {
      console.error('Erro ao obter a localização:', error);
      setErrorMessage('Não foi possível obter a localização. Verifique permissões e HTTPS.');
    }
  };

  return (
    <div>
      <IonButton onClick={obterLocalizacao}>Obter Localização</IonButton>
      {errorMessage && <p>{errorMessage}</p>}
      {(latitude !== null || longitude !== null) && (
        <p>Latitude: {latitude}, Longitude: {longitude}</p>
      )}
    </div>
  );
};

export default GeoLocation;
