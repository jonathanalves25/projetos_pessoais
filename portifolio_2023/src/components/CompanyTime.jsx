
export const CompanyTime = (props) => {
  return(
    <div className="flex justify-between w-full text-indigo-200 text-sm gap-14">
      <p>
        {props.company}
      </p>
      <p>
        {props.time}
      </p>
    </div>
  )
}