import Banner from './componentes/Banner/index';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
      <div>
        <Banner/>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
      </div>
  );
}

export default App;