Here we will setup our redux so that we can store data from google to authorize users on our page.

 1. Install Libraries

    ```shell
    npm i react-redux @reduxjs/toolkit
    ```

 2. Create new folder app in src folder. Create a store.jsx file inside the folder.

 3. Add following template code inside store.jsx file.

    ```js
    import { configureStore} from "@reduxjs/toolkit";
    
    export default configureStore({
        reducer:{},
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck:false,
        })
    })
    ```

 4. Create a new folder features in src folder. Add a user folder inside features. And a userSlice.jsx inside user folder.

 5. Inside userSlice.jsx create initial state to store data of user

    ```js
    const initialState={
        name:null,
        email:null,
        photo:null
    }
    ```

 6. Create Slice inside userSlice.jsx

    ```js
    //TO BE EXPORTED
    //import { createSlice } from "@reduxjs/toolkit";
    
    const userSlice=createSlice({
        name:"user",
        initialState,
        reducers:{
            setUserLoginDetails:(state,action)=>{
                state.name=action.payload.name;
                state.email=action.payload.email;
                state.photo=action.payload.photo;
            },
    
            setSignOutState:(state)=>{
                state.name=null;
                state.email=null;
                state.photo=null;
            }
        }
    })
    ```

 7. Export actions and data from slice

    ```js
    export const {setUserLoginDetails,setSignOutState}=userSlice.actions;
    export const selectUserName=(state)=>state.user.name
    export const selectUserEmail=(state)=>state.user.email
    export const selectUserPhoto=(state)=>state.user.photo
    
    export default userSlice.reducer;
    ```

 8. So userSlice.jsx should look like this:

    ```js
    import { createSlice } from "@reduxjs/toolkit";
    
    const initialState={
        name:"",
        email:"",
        photo:""
    }
    
    const userSlice=createSlice({
        name:"user",
        initialState,
        reducers:{
            setUserLoginDetails:(state,action)=>{
                state.name=action.payload.name;
                state.email=action.payload.email;
                state.photo=action.payload.photo;
            },
    
            setSignOutState:(state)=>{
                state.name=null;
                state.email=null;
                state.photo=null;
            }
        }
    })
    
    export const {setUserLoginDetails,setSignOutState}=userSlice.actions;
    export const selectUserName=(state)=>state.user.name
    export const selectUserEmail=(state)=>state.user.email
    export const selectUserPhoto=(state)=>state.user.photo
    
    export default userSlice.reducer;
    ```

 9. Import userSlice in store.jsx and include it in users

    ```js
    import { configureStore} from "@reduxjs/toolkit";
    //Here----1
    import userReducer from "../features/user/userSlice"
    
    export default configureStore({
        reducer:{
            //Here---2
            user:userReducer
        },
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck:false,
        })
    })
    ```

10. Add Store.jsx to our main.jsx file

    ```js
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    
    //Here--1 Start
    import { Provider } from 'react-redux'
    import store from './app/store'
    //Here--1 End
    
    import App from './App'
    import './index.css'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
    
      <!--Here--2 Start-->
      <Provider store={store}>
        <App />
      </Provider>
      <!--Here--2 End-->
    
      </React.StrictMode>
    )
    ```

11. Make Changes in Header.jsx

    1. import required stuff

       ```js
       import {useSelector,useDispatch} from 'react-redux'
       import {useNavigate} from 'react-router-dom'
       import {selectUserName,selectUserEmail,selectUserPhoto, setUserLoginDetails} from '../features/user/userSlice'
       ```

    2. Add Following in the Header Component

       ```js
           const dispatch=useDispatch();
           const history=useNavigate();
           const username=useSelector(selectUserName);
           const userPhoto=useSelector(selectUserPhoto);
           const userEmail=useSelector(selectUserEmail);
       ```

    3. Create a setUser function to dipatch saving userDetails after login

       ```js
           const setUser=(user)=>{
               dispatch(
                   setUserLoginDetails({
                       name:user.displayName,
                       email:user.email,
                       photo:user.photoURL
                   })
               )
           }
       ```

    4. Call setuser in HandleAuth function

       ```js
       const handleAuth=async()=>{
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
       ```

    5. Put NavMenu and LoginButton in Conditional Rendering. Make a UserImg styled component to display image

       ```js
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
                   <UserImg src={userPhoto} alt="username">
                   </UserImg>
               </>}
           </Nav>
         )
       ```

    6. Define UserImg styled component

       ```js
       const UserImg=styled.img`
           height: 100%;
       `;
       ```

    7. Create a Home.jsx in components folder

       ```js
       import React from 'react'
       
       const Home = () => {
         return (
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur nesciunt debitis hic repellendus autem labore molestias perspiciatis inventore quo fuga iure mollitia, numquam recusandae error eum laudantium voluptate dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta veniam repellendus praesentium possimus exercitationem expedita aliquam facere nesciunt quo voluptatibus numquam, cupiditate, dolore ipsam doloribus, ullam suscipit. Nam, eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, tempora quae. Quod est nihil ex aperiam ab. Delectus doloremque veniam, ipsam ullam quod deleniti, eum inventore illo, suscipit eos dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur nesciunt debitis hic repellendus autem labore molestias perspiciatis inventore quo fuga iure mollitia, numquam recusandae error eum laudantium voluptate dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta veniam repellendus praesentium possimus exercitationem expedita aliquam facere nesciunt quo voluptatibus numquam, cupiditate, dolore ipsam doloribus, ullam suscipit. Nam, eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, tempora quae. Quod est nihil ex aperiam ab. Delectus doloremque veniam, ipsam ullam quod deleniti, eum inventore illo, suscipit eos dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur nesciunt debitis hic repellendus autem labore molestias perspiciatis inventore quo fuga iure mollitia, numquam recusandae error eum laudantium voluptate dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta veniam repellendus praesentium possimus exercitationem expedita aliquam facere nesciunt quo voluptatibus numquam, cupiditate, dolore ipsam doloribus, ullam suscipit. Nam, eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, tempora quae. Quod est nihil ex aperiam ab. Delectus doloremque veniam, ipsam ullam quod deleniti, eum inventore illo, suscipit eos dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur nesciunt debitis hic repellendus autem labore molestias perspiciatis inventore quo fuga iure mollitia, numquam recusandae error eum laudantium voluptate dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta veniam repellendus praesentium possimus exercitationem expedita aliquam facere nesciunt quo voluptatibus numquam, cupiditate, dolore ipsam doloribus, ullam suscipit. Nam, eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, tempora quae. Quod est nihil ex aperiam ab. Delectus doloremque veniam, ipsam ullam quod deleniti, eum inventore illo, suscipit eos dolor.</p>
         )
       }
       
       export default Home 
       ```

    8. In Header.jsx add this, so it redirects if user has logged in

       ```js
       useEffect(()=>{
               onAuthStateChanged(auth,(user)=>{
                   if(user)
                   {
                       setUser(user);
                       history('/home');
                   }
               })
           },[username]);
       ```

12. Making Logout Functionality

    1. Create SignOut and DropDown Component. Add Below NavMenu Component.

       ```js
                   <SignOut>
                       <UserImg src={userPhoto} alt="username">
                       </UserImg>
                       <DropDown>
                           <span onClick={handleAuth}>Sign Out</span>
                       </DropDown>
                   </SignOut>
       ```

       ```js
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
       ```

    2. Make Changes in handleAuth Function

       ```js
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
       ```

13. Final Changes in Header.

    ```js
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
                    history('/home');
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
    ```