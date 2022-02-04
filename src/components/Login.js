import Input from './ui/Input';
import Submit from './ui/Submit';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as actionTypes from '../store/actions/actionTypes';
import { useNavigate } from "react-router-dom";
import ForgotPassword from './ForgotPassword';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.authenticated);
  const isError = useSelector(state => state.isError);
  const [isLoading, setIsLoading] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  useEffect(()=>{
    dispatch({type: actionTypes.GET_USER});
    if (isAuthenticated){
      return navigate("/user");
    }
  },[dispatch, isAuthenticated, navigate])
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(()=> {
      dispatch({
        type: actionTypes.AUTHENTICATING,
        payload: credentials
      });
      setIsLoading(false);
    }, 1000)
  }
  const inputsChangeHandler = (prop) => (event) => {
    setCredentials({...credentials, [prop]: event.target.value})
  }

  const openingForgotPassword = () => {
    setOpenForgotPassword(true);
  }

  const closeForgotPassword = () => {
    dispatch({type:actionTypes.CLEAR_FORGOT_PASSWORD})
    setOpenForgotPassword(false);
  }

  return(
    <>
      <div className="w-11/12 lg:w-4/6 flex flex-col sm:flex-row rounded-lg shadow-2xl shadow-gray-shadow bg-white my-10">
        <div className="flex flex-col items-center p-12 w-full sm:w-2/4 bg-primary rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg text-white text-center" style={{direction: 'rtl'}}>
          <p className="text-xl font-bold mb-5">سلام، به این پروژه رسپانسیو که برای مصاحبه آماده شده است خوش آمدید!</p>
          <p>در این پروژه دو نوع کاربر داریم، کاربر عادی و مدیر. اگر با نام کاربری و رمز عبور مدیر وارد شوید میتوانید لیست تمامی کاربرها را دیده آنها را حذف یا ویرایش کنید. همچنین میتوانید کاربر جدیدی را اضافه کنید.
            و اگر با نام کاربری و رمز عبور کاربر عادی وارد شوید صرفا قادر به ویرایش اطلاعات خود میباشید.
          </p>
          <p className="mt-2">همچنین میتوانید از بخش فراموشی رمز عبور با وارد کردن نام کاربری، رمز عبور مربوطه را دریافت و کپی کنید.</p>
        </div>
        <form className="flex flex-col w-full sm:w-2/4 p-8 text-right">
          <h1 className="text-2xl font-semibold text-slate-700 mb-9">ورود</h1>
          {isError ? <p className="text-red-500 text-sm font-medium mb-3" style={{direction: 'rtl'}}>نام کاربری یا رمز عبور اشتباه است!</p> : null}
          <Input type="text" label="نام کاربری" placeholder="نام کاربری" value={credentials.username} onChange={inputsChangeHandler('username')} />
          <Input type="password" label="رمز عبور" placeholder="رمز عبور" value={credentials.password} onChange={inputsChangeHandler('password')} />
          <Submit value={isLoading? "در حال بررسی ..." : "ورود"} onClick={onSubmitHandler} disabled={isLoading}/>
          <p className="hover:text-slate-600 hover:animate-pulse text-slate-500 text-sm cursor-pointer m-3" onClick={openingForgotPassword}>فراموشی رمز عبور؟</p>
          {openForgotPassword && <ForgotPassword closeForgotPassword={closeForgotPassword} />}
        </form>
      </div>
    </>
  );
}


export default Login;