import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {User}=useContext(UserContext)
    if(!User) return <div> please login</div>
    return <div>Weelcome {User.username} </div>
}

export default Profile
