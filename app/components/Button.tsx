import clsx from "clsx"

export function Button ({onClick, text, className}:{onClick:any, text:string, className?:string}) {
  return(
    <button 
      className={clsx("float-right w-[250px] rounded-md bg-blue-500 px-4 py-2 font-bold text-white", className)}
      onClick={onClick}>{text}
    </button>
  )
}