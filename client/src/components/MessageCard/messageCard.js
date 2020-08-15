import React, { useState, useEffect } from "react";
import { Card } from "reactstrap"
import API from "../../utils/API";


function MessageCard() {

    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [Convos, setConvos] = useState([]);

    useEffect(() => {
        getConvos("lwoods@email.com");
    }, [])

    const getConvos = (user) => {
        API.findAllMessages(user)
            .then(({ data }) => {
                console.log(data)
                if (typeof (data) !== "object") {
                    return
                }
                setConvos(data);
            })
    }

    console.log(Convos);

    return (
        <div></div>
            // {Convos.map(convo => <Card className="cardPaddingMargin">
            //     <div>{convo.participants}</div>
            // </Card>
    // )}
    )
}

export default MessageCard;