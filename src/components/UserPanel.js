import Input from "./ui/Input";
import Button from './ui/Button';
import usersDataStructure from '../data/usersDataStructure';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

const UserPanel = ({data}) => {
const [userInformation, setUserInformation] = useState({
    name: data.name,
    lastName: data.lastName,
    username: data.username,
    password: data.password,       
    role: data.role,
    email: data.email,
    image: data.image,
  });

  const [requiredMsg, setRequiredMsg] = useState({
    show: false,
    object: ''
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  
  const onEditHandler = (prop) => (event) => {
    if(prop === 'image'){
      setUserInformation({...userInformation, [prop]: URL.createObjectURL(event.target.files[0])});
    }else {
      setUserInformation({...userInformation, [prop]: event.target.value});
      if(event.target.required && event.target.value === ''){
        setRequiredMsg({
          show: true,
          object: event.target.placeholder
        });
      }else {
        setRequiredMsg({
          show: false,
          object: ''
        });
      }
    }
  }

  const saveChanges = () => {
    setLoading(true);
    dispatch({type:actionTypes.EDIT_USER, payload: {userId:data.id, updatedData:userInformation}});
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  return(
    <div>
        <p className={`text-sm text-red-500 mb-2 ${requiredMsg.show ? 'block' : 'hidden'}`}>فیلد {requiredMsg.object} الزامی میباشد</p>
        {Object.keys(usersDataStructure.editable).map(item => 
          <Input key={item} label={usersDataStructure.editable[item].translation} 
          value={item === 'image' ? undefined : userInformation[item]} 
          type={usersDataStructure.editable[item].type} className=" text-slate-900" onChange={onEditHandler(item)}
          accept={item === 'image' ? "image/*" : null}
          required={usersDataStructure.editable[item].required}
          placeholder={usersDataStructure.editable[item].translation} 
          />  
        )}
        <Button className="mx-auto" onClick={saveChanges} disabled={loading}>{!loading? "دخیره": "در حال ذخیره سازی ..."}</Button>
    </div>
  );
}

export default UserPanel;