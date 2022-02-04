import Button from './ui/Button';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {BiExit} from "react-icons/bi";
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  const isAuthenticated = useSelector(state => state.authenticated);
  useEffect(()=> {
    if(!isAuthenticated || !user){
      navigate('/')
    }
  },[isAuthenticated, navigate, user]);
  const signOut = () => {
    dispatch({type: actionTypes.LOGOUT})
  }


  return(
    <div className="w-11/12 overflow-hidden">
        <div className="p-5 px-7 font-semibold flex items-center relative" style={{direction: 'rtl'}}>
          <img src={user.image ? user.image : "avatar.jpg"} alt="avatar" className="w-28 h-28 object-cover rounded-full border-secondary border-4 mt-14"/>
          <div className="flex flex-col mx-6 mt-14">
            <p className="text-3xl mb-6">{user.name + " " + user.lastName}</p>
            <p className="bg-secondary py-1 px-2 rounded-lg text-white border-2 border-primary text-sm w-fit">{user.role}</p>
          </div>
          <Button onClick={signOut} className="absolute top-2.5 left-0 sm:left-2.5 text-sm cursor-pointer p-4 pt-3">
            <BiExit className="mt-1 ml-1 text-lg"/> خروج</Button>
        </div>
        <div className="bg-white p-5 min-h-30 rounded-lg text-right mb-4">
            {user.role === 'مدیر' ? <AdminPanel/> : <UserPanel data={user}/>}
        </div>
    </div>
  );
}

export default User;