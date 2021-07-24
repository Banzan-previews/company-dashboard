import React,{useEffect, useState} from 'react'
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom'
import { Space } from './Utils';

import logo from '../Assets/logo2.png'

const NavBox = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    width: 150px;
    height : 100%;
    background-color : white;
    padding : 10px;
    // margin : 10px;
    margin-right : 50px;
    justify-content : space-between;
    align-content: center;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);
    overflow : auto;
    z-index : 1500;

`

const Button = styled.div`
    height : 30px;
    width : 130px;
    cursor : pointer;
    border-radius : 5px;
    font-weight : ${props=>props.active ? 'bold' : 'normal' } ;
    color :${props=>props.active ? 'white' : '#5e5e5e' } ;
    background-color : ${props=>props.active ? '#7142db' : ''} ;
    padding : 5px;
    margin : 5px;
    text-decoration: none;
    font-size : 0.9em;

    
`


export default function  Navbar(){

    const home = <svg  fill='#7142db' width="20" height="20" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>

    const chart = <svg fill='#7142db' width="20" height="20" viewBox="0 0 24 24"><path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/></svg>

    const clock = <svg fill='#7142db' width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>

    const dollar = <svg fill='#7142db' width="20" height="20" viewBox="0 0 24 24"><path d="M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z"/></svg>

    const flag = <svg fill='#7142db' width="20" height="20" viewBox="0 0 24 24"><path d="M4 24h-2v-24h2v24zm18-21.387s-1.621 1.43-3.754 1.43c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v12.085c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028z"/></svg>
    
    const gear = <svg fill='#c4c4c8' width="20" height="20" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>

    let location = useLocation().pathname
    const [currentLocation,setCurrentLocation] = useState('/')

    useEffect(() => {
        console.log(location, currentLocation)
        setCurrentLocation(location)
    }, [location])

  


    return(
        <NavBox>
            <Space size={10} />
            <img style={{width:'100px',padding:'5px'}} src={logo} alt="" /> 
            <Space size={50} />
            <Link style={{textDecoration:'none'}} to='/'>
                <Button active={(currentLocation === '/')} > {home} &nbsp; Overview </Button>
            </Link>
            <Space size={10} />
            <Link style={{textDecoration:'none'}} to='/growth'>
                <Button active={(currentLocation === '/growth')} > {chart} &nbsp; Growth </Button>
            </Link>
            <Space size={10} />
            <Link style={{textDecoration:'none'}} to='/timeline'>
                <Button active={(currentLocation === '/timeline')} > {clock} &nbsp; Timeline </Button>
            </Link>
            <Space size={10} />
            <Link style={{textDecoration:'none'}} to='/resource'>
                <Button active={(currentLocation === '/resource')} > {dollar} &nbsp; Resource </Button>
            </Link>
            <Space size={10} />
            <Link style={{textDecoration:'none'}} to='/manage'>
                <Button active={(currentLocation === '/manage')} > {flag} &nbsp; Manage </Button>
            </Link>
            <Space size={10} />
            <Button> {gear} &nbsp; Settings </Button>
            <Space size={200} />

            
        </NavBox>
    )
  }