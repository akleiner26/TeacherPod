import React, { useState } from "react";


function MessageCard(props) {

    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    const returnReceiver = (props) => {
        props.setReceiver(props.person)
    }
    return (
        <div>
            <div data-username={props.person} onClick={() => returnReceiver(props)}>
                {props.person}
            </div>
            <hr />
        </div>
    )
}

export default MessageCard;