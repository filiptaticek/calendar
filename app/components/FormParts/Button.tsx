import clsx from "clsx"

export function Button ({onClick, text, className, type}:{onClick?:any, text:string, className?:string, type?:"submit"|"button"|"reset"}) {
  return(
    <button 
      type={type}
      className={clsx("float-right w-[250px] rounded-md bg-blue-500 px-4 py-2 font-bold text-white", className)}
      onClick={onClick}>{text}
    </button>
  )
}