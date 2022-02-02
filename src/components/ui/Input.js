import {MdVisibility} from "react-icons/md";
import {MdVisibilityOff} from "react-icons/md";
import { useState } from "react";

const Input = ({type, value, label, placeholder}) => {
  const [visible, setVisible] = useState(false);
  const handleVisibility = () => {
    setVisible(!visible);
  }
  return(
    <div className="flex flex-col">
        <label htmlFor="input" className="mb-1 font-medium">{label}</label>
        {type === 'password' ? 
          <div className="flex relative items-center mb-5">
            <input type={visible ? 'text' : 'password'} value={value} id="input" placeholder={placeholder} className="w-full pl-10 bg-gray-100 rounded-full py-3 px-4 shadow-md hover:shadow-lg focus:outline-0 focus:shadow-gray_focus text-right"/>
            {visible ?
              <MdVisibilityOff className="absolute left-3 cursor-pointer text-slate-600 text-xl hover:scale-105" onClick={handleVisibility}/>
            :
              <MdVisibility className="absolute left-3 cursor-pointer text-slate-600 text-xl hover:scale-105" onClick={handleVisibility}/>}
          </div>
        :
        <input type={type} value={value} id="input" placeholder={placeholder} className="bg-gray-100 rounded-full py-3 px-4 shadow-md mb-5 hover:shadow-lg focus:outline-0 focus:shadow-gray_focus text-right"/>
        }
        
    </div>
  );
}

export default Input;