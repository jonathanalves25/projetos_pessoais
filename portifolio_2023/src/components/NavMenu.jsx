import {Link} from 'react-router-dom';

export const NavMenu = () => {
  return (
    <div className="container mx-auto flex justify-between sticky text-yellow-200">
      <div className="w-12 h-12 ml-8 xl:ml-0 md:w-14 md:h-14 rounded-full border-2 border-yellow-200 flex justify-center items-center mt-4 md:ml-8 xl:ml-0">
        <h2 className="text-xl md:text-3xl font-sans">JB</h2>
      </div>

      <div className='mr-10'>
        <ul className="sm:flex md:gap-10 font-sans text-yellow-200 text-xl uppercase pt-4 hidden sm:block">
          <li className='hover:text-stone-700 ease-in-out duration-300'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='hover:text-stone-700 ease-in-out duration-300'>
            <Link to='/sobre'>
              Sobre
            </Link>
          </li>
          <li className='hover:text-stone-700 ease-in-out duration-300'>
            <Link to='/skills'>
              Skills
            </Link>
          </li>
          <li className='hover:text-stone-700 ease-in-out duration-300'>
            <Link to='/projetos'>
              Projetos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}