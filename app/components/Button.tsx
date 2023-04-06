import clsx from "clsx"

export function Button ({onClick, text, className}:{onClick:any, text:string, className?:string}) {
  return(
    <button 
      className={clsx("float-right mx-2 w-[250px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700", className)}
      onClick={onClick}>{text}
    </button>
  )
}