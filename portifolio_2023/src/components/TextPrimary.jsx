
export const TextPrimary = (props) => {
  return(
    <div className="text-indigo-200 font-sans text-sm text-justify pt-4">
        <p className="lg:text-lg">
          {props.text}
        </p>
    </div>
  )
}