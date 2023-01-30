import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'


export const Socials = () => {
  return (
    <div className="text-white flex flex-col gap-5 -mr-44 text-xl w-52">
      <div className="w-full">
        <div className="flex gap-2 items-center px-2 py-1 bg-gray-300 text-gray-800 mr-6 hover:-ml-24 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
          <BsLinkedin/>
          <p className="font-bold">Linkedin</p>
        </div>
      </div>
      <div className="flex gap-2 items-center px-2 py-1 bg-gray-300 text-gray-800 mr-6 hover:-ml-20 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <BsGithub/>
        <p className="font-bold">Github</p>
      </div>
      <div className="flex gap-2 items-center px-2 py-1 bg-gray-300 text-gray-800 mr-6 hover:-ml-28 w-auto hover:ease-in hover:duration-300 ease-out duration-300 rounded">
        <BsWhatsapp/>
        <p className="font-bold">WhatsApp</p>
      </div>
    </div>
  )
}