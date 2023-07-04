import { Socials } from "../components/Socials"
import ImgAvatar from '../assets/images/avatar1sembg.png'
import { Link } from "react-router-dom"
export const Home = () => {
  return(
    <div className="container-full h-3/4 flex flex-col sm:flex-row justify-center sm:justify-end items-center overflow-hidden">
      <div className="container text-red-700 mx-auto flex justify-center sm:justify-between">
          <div className="flex flex-col justify-center w-4/4 sm:w-2/4">
            <h2 className="text-5xl md:text-4xl lg:text-6xl md:pl-10 xl:pl-0 xl:text-8xl font-sans">Jonathan <span className="text-white">Alves</span></h2>
            <p className="text-3xl ml-2 text-red-700 md:text-2xl lg:text-4xl md:pl-10 xl:pl-0 xl:text-5xl pt-4 font-sans">Front-end Developer</p>
            <div className="mx-auto sm:ml-0 mt-4 flex md:ml-12 xl:ml-0">
              <p className="border-2 border-white p-2 text-xl text-red-700 font-sans rounded hover:border-red-700 hover:bg-blue-700 hover:text-white ease-in-out animate-pulse duration-300">
                <Link to=".././assets/curriculo/JonathanAlves.pdf" target="_blank" download>
                  Download CV
                </Link>
              </p>
            </div>
            
          </div>
          <div className="sm:flex justify-center hidden sm:block">
            <div className="md:w-2/3 lg:w-2/3 lg:h-3/3 xl:w-full xl:h-4/4 bg-gradient-to-b from-indigo-200 to-red-700 rounded-full overflow-hidden">
              <img src={ImgAvatar} alt="Imagem de uma pessoa teclando no seu notebook"/>
            </div>
          </div>
        </div>
        <Socials/>
      </div>
  )
}