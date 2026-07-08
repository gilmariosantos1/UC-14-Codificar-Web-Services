import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  async function buscarUsuario() {
      const resposta = await fetch('http://localhost:3000/usuarios',
        {headers: {
          Authorization:"123456"
        }}
      );
      const dados = await resposta.json();
      console.log(dados);
    }
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>

       <button onClick={buscarUsuario}>Buscar Usuário</button> 
    </div>
  );
};

export default ExploreContainer;
