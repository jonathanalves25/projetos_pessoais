import imgPerfil from '../assets/images/johnny.jpg'

export const About = () => {
  return(
    <div className="container mx-auto flex flex-col md:flex-row overflow-hidden md:items-center md:mt-10 lg:mt-28 lg:justify-center lg:gap-20">
      <div className="p-8 lg:p-2 text-justify text-white md:w-3/3 lg:w-1/2">
          <h2 className="text-3xl text-red-700 font-sans py-8 md:py-4">
            Sobre mim
          </h2>
          <p className="font-sans">
          Olá, meu nome é Jonathan, sou um desenvolvedor front-end com 1 ano de experiência na area web. Durante este período, tive a oportunidade de trabalhar em um projeto de migração de dados, onde fiquei responsável pela parte de integração dos e envio dos dados para a API.<br/><br/>
          Estou procurando uma vaga de front-end com foco em reactJS para continuar crescendo profissionalmente e ajudar empresas a alcançar seus objetivos através de soluções web de qualidade. Tenho facilidade em trabalhar em equipe, sou proativo e busco sempre soluções inovadoras.<br/><br/>
          Se você estiver procurando por um desenvolvedor web com paixão pelo que faz, habilidades técnicas sólidas e vontade de aprender, eu seria uma excelente escolha para sua equipe. <br/><br/>
          Agradeço pela sua atenção e fico à disposição para uma conversa mais aprofundada sobre como posso contribuir para sua equipe. Obrigado.
          </p>
      </div>
      <div className="hidden md:w-1/2 lg:block lg:w-1/3 md:px-6 lg:px-0">
          <img src={imgPerfil} alt="imagem de uma pessoa sentada" className='md:self-start lg:self-center md:rounded-xl md:shadow-xl'/>
      </div>
    </div>
  )
}