import React from 'react'
import { Redirect } from 'react-router-dom'
import Messages from '../Messages/Messages'
import MessageInput from '../MesssageInput/MessageInput'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import PersonIcon from '@material-ui/icons/Person'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import './Chat.css'

export default function Chat(props) {
    const user = props.user
    const room = props.room
    if (user == null && room == null) {
        return <Redirect to="/" />
    } else {
        return (
            <div className="chatContainer">
                <div className="chatHeader">
                    <span className="room">
                        <HomeOutlinedIcon />
                        <span>{room}</span>
                    </span>
                    <span className="user">
                        <PersonIcon />
                        <span>{user}</span>
                    </span>
                </div>
                <Messages />
                <MessageInput user={user} room={room} />
                {/* <OnlineUsers /> */}
            </div>
        )
    }
}