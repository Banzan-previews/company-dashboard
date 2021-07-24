import React from 'react'
import styled from 'styled-components';

import logo from '../Assets/logo2.png'

const NavBox = styled.div`
    width: 100%;
    position : fixed;
    display : flex;
    // background-color : #f8d249;
    background-color : white;
    padding : 10px;
    justify-content : space-between;
    align-content: center;
    z-index : 1000;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);

`

const Logo = styled.div`
    color : white ;
    font-weight : bold;
    
`

const UserProfile = styled.div`
    width : 30px;
    height : 30px;
    border-radius : 50% ;
    background-color : #7142db;
    margin: 0px 20px;
`

 
export default function  Navbar(){

    return(
        <NavBox>
            <Logo>
                <img style={{width:'130px',padding:'5px'}} src={logo} alt="" />                
            </Logo>
            <UserProfile />
        </NavBox>
    )
  }