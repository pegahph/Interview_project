const Button = ({children, onClick , className, disabled}) => {
  return(
    <button className={"hover:shadow-xl disabled:bg-secondary shadow-sm bg-primary px-6 py-3 text-white rounded-lg font-semibold flex items-center justify-center " + className }
      onClick={onClick} disabled={disabled}
    >{children}</button>
  );
}

export default Button;