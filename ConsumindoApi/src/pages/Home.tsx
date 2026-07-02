import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');


  useEffect(() => {
    fetch('https://viacep.com.br/ws/49680000/json/')
      .then(response => response.json())
      .then(data => {
        setEstado(data.estado);
        setCidade(data.localidade);
        setRua(data.logradouro);
        console.log(data);      
     }); 
 },[]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1>
            Consulta CEP
          </h1>
          <p>
            Estado: {estado}
          </p>
          <p>
            Cidade: {cidade}
          </p>
          <p>
            Rua: {rua}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
