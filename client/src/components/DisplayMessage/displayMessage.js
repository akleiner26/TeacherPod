import React, { useState, useEffect } from "react";


function DisplayMessage(props) {

    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    return (
        <div className={props.class}>
            {props.text}
        </div>
    )
}

export default DisplayMessage;