import './style.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
  
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovacao e Gestao'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('o formulario foi submetido.')
  }

  return (
    <section className="formulario">
      
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
        <ListaSuspensa label="Tipo" itens={times}/>
        <Botao>Criar Card</Botao>

      </form>
    </section>
  )
}

export default Formulario