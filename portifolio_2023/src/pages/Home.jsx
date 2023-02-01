import { Socials } from "../components/Socials"
import ImgAvatar from '../assets/images/avatar1sembg.png'
import { Link } from "react-router-dom"
export const Home = () => {
  return(
    <div className="container-full h-3/4 flex justify-end items-center overflow-hidden">
      <div className="container text-yellow-300 mx-auto flex justify-between">
          <div className="flex flex-col justify-center w-2/4">
            <h2 className="text-8xl font-sans">Jonathan <span className="text-stone-800">Alves</span></h2>
            <p className="text-5xl pt-4 font-sans">Front-end Developer</p>
            <div className="mt-4 flex">
              <p className="border-2 border-yellow-300 p-2 text-xl font-sans rounded hover:border-white hover:bg-white hover:text-stone-800 ease-in-out animate-pulse duration-300">
                <Link to=".././assets/curriculo/JonathanAlves.pdf" target="_blank" download>
                  Download CV
                </Link>
              </p>
            </div>
            
          </div>
          <div className="flex justify-center">
            <div className="w-4/4 h-4/4 bg-gradient-to-b from-indigo-200 to-indigo-400 rounded-full overflow-hidden">
              <img src={ImgAvatar} alt="Imagem de uma pessoa teclando no seu notebook" className="" />
            </div>
          </div>
        </div>
        <Socials/>
      </div>
  )
}