import React from "react"
import styled from "styled-components"

const NavBarComponent = styled.div`
    width: 100%;
    height: 60px;
    background-color: #3c1522;
    display: flex;
    `

const Header = styled.p`
    font-family: monospace;
    color: white;
    margin: 0;
    font-size: 40px;
    `

const NavBarContents = styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
    `

const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`

const SmallContainer = styled.div`
    width: 50;
    display: flex;
    position: relative;
`

const MenuButton = styled.p`
    color: white;
    font-size: 40px;
    font-family: monospace;
    `

const InvisiButton = styled.p`
color: transparent;
font-size: 40px;
font-family: monospace;
`



const NavBar = () => {
    return (
        <NavBarComponent>
            <NavBarContents>
                <SmallContainer className="SmallContainer">
                    <MenuButton>=</MenuButton>
                </SmallContainer>
                <HeaderContainer>
                    <Header>SITE TITLE</Header>
                </HeaderContainer>

            </NavBarContents>
            <SmallContainer className="SmallContainer">
                <InvisiButton>=</InvisiButton>
            </SmallContainer>
        </NavBarComponent>
    )
}

export default NavBar