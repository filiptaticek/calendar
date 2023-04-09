/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import clsx from "clsx"

interface IUniversalForm {
    header: any;
    onSubmit?: any;
    closeForm: any;
    children: any;
    className?: string;
    background?: string;
}

export const UniversalForm = ({ onSubmit, children, closeForm, className, background }: IUniversalForm) => {

  return (
    <div
      className={clsx("fixed left-0 top-0 h-screen w-screen overflow-hidden overflow-y-scroll bg-black/70 px-10 py-[100px] text-left lg:px-0",className)}
    >
      <form className={clsx("relative m-auto w-[300px] rounded-xl p-10 text-white sm:w-[500px]",background)} onSubmit={onSubmit}>
        <img 
          className="relative bottom-[30px] h-[40px] cursor-pointer sm:left-[412px]" src="zavrit_formular.png" onClick={closeForm}>
        </img>
        <div className="overflow-hidden">
          {children}
        </div>
      </form>
    </div>
  )
}
