import Input from "./ui/Input";
import Button from './ui/Button';
import usersDataStructure from '../data/usersDataStructure';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';
import { useSelector } from 'react-redux';
import Dialog from './ui/Dialog'

const UserInfo = ({data, closeUserInfo, admin, isNew}) => {
  const [userInformation, setUserInformation] = useState({
    name: isNew ? '' : data.name,
    lastName: isNew ? '' :data.lastName,
    username: isNew ? '' :data.username,
    password: isNew ? '' :data.password,       
    role: isNew ? '' :data.role,
    email: isNew ? '' :data.email,
    image: isNew ? '' :data.image,
  });

  const [requiredMsg, setRequiredMsg] = useState({
    show: false,
    object: ''
  });

  const newUserId = useSelector(state => state.newId);

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
    if(userInformation.username === '' || userInformation.password === ''){
      setRequiredMsg({
        show: true,
        object: 'نام کاربری و رمز عبور'
      })
      setTimeout(() => {
        setLoading(false);
      }, 100)
    }else {
      if(isNew) {
        dispatch({type:actionTypes.ADD_USER, userData: {...userInformation, id:newUserId}});
      }else {
        dispatch({type:actionTypes.EDIT_USER, payload: {userId:data.id, updatedData:userInformation}});
      }   
      setTimeout(() => {
        setLoading(false);
        closeUserInfo();
      }, 1000)
    }
  }

  return(
    <>
      <Dialog close={closeUserInfo}>
        <p className={`text-sm text-red-500 mb-2 ${requiredMsg.show ? 'block' : 'hidden'}`}>فیلد {requiredMsg.object} الزامی میباشد</p>
      {Object.keys(usersDataStructure.editable).map(item => 
        <Input key={item} label={usersDataStructure.editable[item].translation} 
          placeholder={usersDataStructure.editable[item].translation} 
          value={item === 'image' ? undefined : userInformation[item]} 
          type={usersDataStructure.editable[item].type}
          className=" text-slate-900" onChange={onEditHandler(item)}
          accept={item === 'image' ? "image/*" : null}
          required={usersDataStructure.editable[item].required}
          />  
      )}
      {admin? <Input label="نقش" required placeholder="نقش" value={userInformation.role} className=" text-slate-900" onChange={onEditHandler('role')}/> : null}
      <div className="flex items-center justify-center">
        <Button className="mx-4" onClick={closeUserInfo}>انصراف</Button>
        <Button className="mx-4" onClick={saveChanges} disabled={loading}>{!loading? "ذخیره": "در حال ذخیره سازی ..."}</Button>
      </div>
      </Dialog>
    </>
 
  );
}

export default UserInfo