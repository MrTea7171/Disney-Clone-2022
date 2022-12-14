import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {selectUserName,selectUserEmail,selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/user/userSlice'

const Header = () => {
    const dispatch=useDispatch();
    const history=useNavigate();
    const username=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    const userEmail=useSelector(selectUserEmail);
    const handleAuth=async()=>{
        if(!username)
        {
            try
            {
                const result=await signInWithPopup(auth,provider);
                setUser(result.user)
            }
            catch(e)
            {
                console.log(e||"Error");
            }
        }
        else if(username)
        {
                await signOut(auth);
                dispatch(setSignOutState())
                history("/");
        }
    }
    const setUser=(user)=>{
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            })
        )
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setUser(user);
            }
        })
    },[username]);
  return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney+"/>
        </Logo>
        {!username?
            <LoginButton onClick={handleAuth}>Login</LoginButton>
        :
        <>
            <NavMenu>
                <a href="/Home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="#">
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="#">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
                <UserImg src={userPhoto} alt="username">
                </UserImg>
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
        </>}
    </Nav>
  )
}

const Nav=styled.nav`
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #090b13;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo=styled.a`
padding: 0;
width: 100px;
margin-top:4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`

const NavMenu=styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    position:relative;
    margin-left: 25px;
    margin-right: auto;

    @media only screen and (max-width:768px)
    {
        display: none;
    }

    a{
        display:flex;
        justify-content: center;
        align-items:center;
        padding:0px 12px;

        img{
            height: 23px;
            min-width: 23px;
            width: 20px;
            margin-right: 2px;
        }

        span{
            color:rgb(249,249,249);
            font-size:20px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;

            &::before{
                content: '';
                position: absolute;
                background-color: #f9f9f9;
                height: 2px;
                width: 96%;
                transform: scaleX(0);
                transform-origin:left center;
                left:2%;
                bottom: -5px;
                visibility: hidden;
                opacity: 0;
                transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            &:hover::before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }

        
    }
`;

const LoginButton=styled.a`
    background-color: rgba(0,0,0,0.6);
    padding:8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0%;
    font-size:20px;
    font-weight: 500;
    cursor:pointer;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        
    }
`;

const UserImg=styled.img`
    height: 100%;
`;

const DropDown=styled.div`
    position:absolute;
    top:48px;
    right:50%;
    transform: translateX(50%);
    background:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    /* rgba(r b g /a%) */
    box-shadow: rgba(0 0 0 /50%) 0px 0px 18px 0px;
    padding:0px;
    padding:10px;
    font-size:13px;
    letter-spacing:3px;
    width:104px;
    opacity: 0;
`;

const SignOut=styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;


    ${UserImg}
    {
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown}
        {
            opacity: 1;
            transition: all 1s ease-in;
        }
    }
`;

export default Header