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
    async function buscarUsuario() {
      const resposta = await fetch('http://localhost:3000/usuarios/',
        {
          headers: {
          Authorization:"123456"
        }
      }
      );
      const dados = await resposta.json();
      console.log(dados);
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
            <button className='button' onClick={() => { consultarCep(cepBusca); }}>
              Consultar
            </button>
          
          <p>
            Estado: {estado}
          </p>
          <p>
            Cidade: {cidade}
          </p>
          <p>
            Rua: {rua}
          </p>
          <button onClick={buscarUsuario}>Buscar Usuário</button>
        </div>
    </div>
  );
};

export default ConsultaViaCep;
