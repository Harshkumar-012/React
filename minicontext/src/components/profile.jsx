import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function profile() {

    const {user} = UseContext(UserContext)

    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default profile
