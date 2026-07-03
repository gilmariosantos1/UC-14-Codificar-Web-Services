import { useEffect, useState } from 'react';
import './ConsultaViaCep.css';

interface ContainerProps { }

const ConsultaViaCep: React.FC<ContainerProps> = () => {
   const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [cepBusca, setCep] = useState('');
  
    function consultarCep(cep: string) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          setEstado(data.uf);
          setCidade(data.localidade);
          setRua(data.logradouro);
          console.log(data);      
       }); 
    }
  //   useEffect(() => {
  //     fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //       .then(response => response.json())
  //       .then(data => {
  //         setEstado(data.estado);
  //         setCidade(data.localidade);
  //         setRua(data.logradouro);
  //         console.log(data);      
  //      }); 
  //  },[]);
  return (
    <div id="container">
     <div id="card">
          
            Consulta CEP:
            <input type="text" value={cepBusca} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" />
            <br />
            <button className='buttton' onClick={() => {  consultarCep(cepBusca)           
            }}>Consultar</button>
          
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
    </div>
  );
};

export default ConsultaViaCep;
