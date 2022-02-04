import UserList from './UserList';
import UserInfo from './UserInfo';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';
import Button from './ui/Button';

const AdminPanel = () => {
  const [activeUser , setActiveUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const dispatch = useDispatch();

  const editUserHandler = (data) => {
    setActiveUser(data);
    setEditUser(true);
  }

  const deleteUserHandler = (id) => {
    dispatch({type: actionTypes.DELETE_USER, userId:id})
  }
  return(
    <>
      {editUser || addUser ? <UserInfo data={activeUser} isNew={addUser} closeUserInfo={() => {setEditUser(false); setAddUser(false);}} admin/>: null }
      <UserList editUserHandler={editUserHandler} deleteUserHandler={deleteUserHandler}/>
      <Button className="ml-auto mt-5" onClick={() => {setAddUser(true)}}>افزودن کاربر جدید <AiOutlinePlusCircle className="mx-1"/></Button>
    </>
  );
}

export default AdminPanel;