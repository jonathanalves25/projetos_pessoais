import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario';
import {useState} from 'react'


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
      <div>
        <Banner/>
        <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
        
      </div>
  );
}

export default App;
