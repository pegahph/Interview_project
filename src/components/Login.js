import Input from './ui/Input';
import Submit from './ui/Submit';

const Login = () => {
  return(
    <>
      <div className="w-4/6 flex flex-col sm:flex-row rounded-lg shadow-3xl shadow-slate-200 bg-white my-10">
        <div className="flex flex-col items-center p-12 w-full sm:w-2/4 bg-pink-500 rounded-tl-lg rounded-tr-lg  sm:rounded-tr-none sm:rounded-bl-lg text-white text-center" style={{direction: 'rtl'}}>
          <p className="text-xl font-bold mb-5">سلام، به این پروژه رسپانسیو که برای مصاحبه آماده شده است خوش آمدید!</p>
          <p>شما میتوانید با نام کاربری و رمز عبور درنظر گرفته شده برای ادمین، وارد پنل ادمین شده و لیست کاربران موجود را مشاهده و در صورت نیاز اطلاعات را ویرایش کنید.</p>
        </div>
        <form className="flex flex-col w-full sm:w-2/4 p-8 text-right">
          <h1 className="text-2xl font-semibold text-slate-700 mb-9">ورود</h1>
          <Input type="text" label="نام کاربری" placeholder="نام کاربری"/>
          <Input type="password" label="رمز عبور" placeholder="رمز عبور"/>
          <Submit value="ورود"/>
          <p className="hover:text-slate-600 hover:animate-pulse text-slate-500 text-sm cursor-pointer m-3">فراموشی رمز عبور؟</p>
        </form>
      </div>
    </>


  );
}

export default Login;