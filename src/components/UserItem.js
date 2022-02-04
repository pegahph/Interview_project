import {BiEditAlt} from 'react-icons/bi';
import {FaTrashAlt} from 'react-icons/fa';
const UserItem = ({data , deleteUserHandler , editUserHandler}) => {
  return(
    <div className="py-2 px-5 my-1 flex flex-row-reverse justify-between items-center rounded-lg shadow-sm cursor-pointer hover:shadow-md bg-userItem">
        <div className="flex flex-row-reverse items-center">
          <img src={data.image ? data.image : 'avatar.jpg'} alt="avatar" className="w-14 object-cover h-14 rounded-full border-secondary border-4 ml-4"/>
          {data.name + " " + data.lastName}
          <span className="bg-secondary mx-3 p-1 text-xs rounded-lg text-white border-2 border-primary">{data.role}</span>
        </div> 
        <div className="hidden sm:inline-block">{data.email}</div> 
        <div className="flex items-center">
          <FaTrashAlt className="text-lg hover:scale-110" onClick={()=>deleteUserHandler(data.id)}/>
          <BiEditAlt className="text-lg mx-6 sm:mx-8 hover:scale-110" onClick={()=>editUserHandler(data)}/>
        </div>

    </div>
  );
}

export default UserItem;