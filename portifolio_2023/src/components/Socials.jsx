import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'


export const Socials = () => {
  return (
    <div className="text-stone-800 flex flex-col gap-8 -mr-48 text-3xl w-60 font-sans">

      <div className="flex gap-2 items-center px-2 py-1 bg-indigo-200 text-gray-800 mr-6 hover:-ml-28 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <BsLinkedin/>
        <p className="font-bold text-2xl pl-1">
          <a href='https://www.linkedin.com/in/jonathan-alves-42278610a/' target='_blank' rel='noopener noreferrer'>
            Linkedin
          </a>
        </p>
      </div>

      <div className="flex gap-2 items-center px-2 py-1 bg-indigo-200 text-gray-800 mr-6 hover:-ml-24 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <BsGithub/>
        <p className="font-bold text-2xl pl-1">
          <a href='https://github.com/jonathanalves25/projetos_pessoais' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </p>
      </div>
      <div className="flex gap-2 items-center px-2 py-1 bg-indigo-200 text-gray-800 mr-6 hover:-ml-36 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <BsWhatsapp/>
        <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5547999468154' target='_blank' rel='noopener noreferrer'>
          <p className="font-bold text-2xl pl-1">WhatsApp</p>
        </a>
      </div>
    </div>
  )
}