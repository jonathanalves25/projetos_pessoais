import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario';
import {useState} from 'react'
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Front-end', 
      corPrimaria: '#82CFFA', 
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science', 
      corPrimaria: '#A6D157', 
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Programação', 
      corPrimaria: '#57C278', 
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'DevOps', 
      corPrimaria: '#E06B69', 
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design', 
      corPrimaria: '#DB6EBF', 
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile', 
      corPrimaria: '#FFBA05', 
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovacao e Gestao', 
      corPrimaria: '#FF8A29', 
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
      <div>
        <Banner/>
        <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />

        {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      </div>
  );
}

export default App;
