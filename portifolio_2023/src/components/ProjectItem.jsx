
export const ProjectItem = (props) => {
  return(
    <div className=" bg-stone-700 h-full flex items-center lg:shadow-xl">
      <div className="flex items-center w-full bg-stone-800 h-12 hover:py-8 transition-all ease-in-out duration-300">
        <p className="text-center  w-full uppercase text-white">
          {props.label}
        </p>
      </div>
    </div>
  )
}