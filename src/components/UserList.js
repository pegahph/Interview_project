import UserItem from './UserItem';
import { useSelector } from 'react-redux';

const UserList = ({deleteUserHandler, editUserHandler}) => {
    const users = useSelector(state => state.users);
    return(
        <div className="flex flex-col overflow-scroll flex-1">
            <p className="mb-3" style={{direction: 'rtl'}}>در حال حاضر {users.length} کاربر وجود دارد:</p>
            {users.map(user => <UserItem data={user} key={user.id} deleteUserHandler={deleteUserHandler} editUserHandler={editUserHandler}/>)}
        </div>
    );
}

export default UserList;