import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'


export const Socials = () => {
  return (
    <div className="text-stone-800 flex sm:flex-col justify-center gap-2 mt-6 sm:mt-0 sm:gap-8 sm:-mr-48 text-3xl w-60 font-sans">

      <div className="px-2 py-1 bg-red-700 text-white  sm:mr-6 hover:-ml-28 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <a href='https://www.linkedin.com/in/jonathan-alves-42278610a/' className="flex gap-2 items-center" target='_blank' rel='noopener noreferrer'>
          <BsLinkedin/>
          <p className="hidden sm:block font-bold text-2xl pl-1">Linkedin</p>
        </a>
      </div>

      <div className="px-2 py-1 bg-red-700 text-white sm:mr-6 hover:-ml-24 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <a href='https://github.com/jonathanalves25/projetos_pessoais' className="flex gap-2 items-center" target='_blank' rel='noopener noreferrer'>
          <BsGithub/>
          <p className="hidden sm:block font-bold text-2xl pl-1">Github</p>
        </a>
      </div>

      <div className="px-2 py-1 bg-red-700 text-white sm:mr-6 hover:-ml-36 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5547999468154'  className="flex gap-2 items-center" target='_blank' rel='noopener noreferrer'>
          <BsWhatsapp/>
          <p className="font-bold text-2xl pl-1 hidden sm:block ">WhatsApp</p>
        </a>
      </div>
    </div>
  )
}