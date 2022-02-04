const Dialog = ({close,children,width,height,top}) => {
  return(
    <>
     <div className={`bg-white p-9 pt-10 fixed rounded-lg ${width ? width: 'w-5/6 sm:w-4/6'} z-50  ${height} left-2/4 -translate-x-2/4 ${top? top : 'top-12'} bottom-12 overflow-scroll `}>
         {children}
     </div>
    <div className="bg-dark-shadow fixed inset-0 flex items-center justify-center z-10" onClick={close}></div>
    </>
  );
}

export default Dialog;