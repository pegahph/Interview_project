import Dialog from "./ui/Dialog";
import Input from "./ui/Input";
import * as actionTypes from '../store/actions/actionTypes';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Button from './ui/Button';
import { useState } from "react";

const ForgotPassword = ({closeForgotPassword}) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const forgotPasswordInfo = useSelector(state=> state.forgotPasswordInfo);

  const dispatch = useDispatch();

  const findPassword = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch({
        type: actionTypes.RESTORE_PASSWORD,
        username: username
      })
      setLoading(false);
    },1000)
  }
  const copyPassword = () => {
    navigator.clipboard && navigator.clipboard.writeText(forgotPasswordInfo.user[0].password)
  }
  return(
    <Dialog close={closeForgotPassword} width='w-fit' height='h-fit' top='top-1/3' >
      <div className="flex justify-center flex-col mx-auto relative h-full">
        <Input label="نام کاربری خود را وارد کنید" placeholder="نام کاربری" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        <Button onClick={findPassword} disabled={loading}>بازیابی رمز عبور</Button>
        {forgotPasswordInfo.notFound && <div className="flex mt-5 justify-center items-center flex-col font-bold leading-loose" >کابری با این نام کاربری وجود ندارد</div>}
        {JSON.stringify(forgotPasswordInfo.user) !== '{}' && !forgotPasswordInfo.notFound && 
        <div className="flex mt-5 justify-center items-center font-bold leading-loose" style={{direction: 'rtl'}}>
          <p>رمز عبور: {forgotPasswordInfo.user[0].password}</p>
          <button className="bg-secondary py-1 px-2 rounded-lg text-white border-2 border-primary text-sm w-fit mx-5" onClick={copyPassword}>کپی</button>
        </div>}
      </div>
    </Dialog>
  );
}

export default ForgotPassword;