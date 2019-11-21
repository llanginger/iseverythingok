import React from "react"
import styled from "styled-components"

const MessageComponent = styled.div`

`

const MessageText = styled.p`
    font-size: 30px;
    font-family: monospace;
`

const Message = () => {
    return (
        <MessageComponent>
            <MessageText>MESSAGE</MessageText>
        </MessageComponent>
    )
}

export default Message