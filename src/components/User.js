import Input from "./ui/Input";
import Button from './ui/Button';
const User = () => {
  return(
    <div className="w-11/12 rounded-lg overflow-hidden">
        <div className="bg-pink-500 p-5 text-white font-semibold flex items-center">
          <img src="img_avatar.png" alt="avatar" className="w-28 rounded-full border-pink-200 border-4"/>
          <p className="mx-6 text-3xl">Welcome John!</p>
        </div>
        <div className="bg-white p-5 min-h-30">
            <Input type="text" label="Username" value="pegah"/>
            <Input type="text" label="Email" value="pegah"/>
            <Button>Edit</Button>
        </div>
    </div>
  );
}

export default User;