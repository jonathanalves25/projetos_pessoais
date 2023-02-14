
export const CompanyTime = (props) => {
  return(
    <div className="flex justify-between w-full text-indigo-200 text-sm gap-14 font-sans">
      <p className="lg:text-xl">
        {props.company}
      </p>
      <p className="italic lg:text-lg text-stone-700">
        {props.time}
      </p>
    </div>
  )
}