const Submit = ({value, onClick, disabled}) => {
  return(
    <input type="submit" style={{direction: 'rtl'}} className="disabled:bg-secondary bg-primary rounded-full text-white font-bold p-3 cursor-pointer mt-1 hover:shadow-pink_focus" value={value} onClick={onClick} disabled={disabled} />
  );
}

export default Submit;