import clsx from "clsx"

export function Button ({onClick, className, type, children}:{onClick?:any, text?:string, className?:string, type?:"submit"|"button"|"reset", children?:any}) {
  return(
    <button 
      type={type}
      className={clsx("float-right w-[250px] rounded-md border border-white bg-blue-500 px-4 py-2 font-bold text-white", className)}
      onClick={onClick}>
      {children}
    </button>
  )
}