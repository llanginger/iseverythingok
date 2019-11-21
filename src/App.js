import React from 'react';
import styled from "styled-components"
import NavBar from './components/NavBar/NavBar';
import MessageContainer from "./components/MessageContainer/MessageContainer"

const AppComponent = styled.div`
    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
    position: relative;
`

function App() {
    return (

        <AppComponent className="App">
            <NavBar />
            <MessageContainer />
        </AppComponent>

    );
}

export default App;
