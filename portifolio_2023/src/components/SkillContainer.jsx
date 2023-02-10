
export const SkillContainer = (props) => {
  return(
    <div className="mt-6">
      <p className="text-indigo-200 mb-2 font-sans">
        {props.name}
      </p>
      <div className="w-full rounded-lg bg-stone-800 h-3">
        <div className="bg-red-700 h-full rounded-lg">

        </div>
      </div>
    </div>
  )
}