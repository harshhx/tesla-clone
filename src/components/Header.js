import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function header() {
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg"></img>
            </a>
            <MenuGroup>
            <div>
                Model S
            </div>
            <div>
                Model X
            </div>
            <div>
                Model Y
            </div>
        </MenuGroup>
        <RightMenu>
            <a href="#">
                Shop
            </a>
            <a href="#">
                Tesla Accounts
            </a>
            <MenuIconContainer>
                <MenuIcon></MenuIcon>
            </MenuIconContainer>
        </RightMenu>
        </Container>

        
    )
}

export default header

const Container = styled.div`
    display:flex;
    min-height:60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    
`
const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight :600;
        padding: 0 10px;
        cursor: pointer;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
   
    a{
        
        font-weight: 600;
        text-transform: uppercase;
        padding-right :10px;
        text-decoration:None;
    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`