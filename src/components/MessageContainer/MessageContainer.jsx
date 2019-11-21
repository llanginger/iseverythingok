import React from "react"
import styled from "styled-components"
import Message from "../Message/Message"
const MessageContainerComponent = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #42202c;
`

const MessageContainer = () => {
    return (

        <MessageContainerComponent>
            <Message />

        </MessageContainerComponent>
    )
}

export default MessageContainer