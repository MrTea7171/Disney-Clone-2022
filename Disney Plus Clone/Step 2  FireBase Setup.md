 1. Login to Firebase

 2. Create Project. Add Name and Go Next.

 3. Go to Project Setting->Web App->RegisterApp

 4. Install Firebase in our VsCode

    ```shell
    npm install firebase firebase-tools
    ```

 5. Copy the *firebaseConfig* from the firebase SDK to a new file in src file. You can name it *firebase.jsx* .

 6. Add the following imports

    ```js
    import {initializeApp} from "firebase/app";
    import {getAuth,GoogleAuthProvider} from 'firebase/auth';
    import {getFirestore} from 'firebase/firestore';
    import {getStorage} from 'firebase/storage'
    ```

 7. Add following code below *firebaseConfig* :

    ```js
      const firebaseApp=initializeApp(firebaseConfig);
      const db= getFirestore(firebaseApp);
      const auth=getAuth(firebaseApp);
      const provider=new GoogleAuthProvider(auth);
      const storage=getStorage(firebaseApp);
    
      export{auth,provider,storage};
      export default db;
    ```

 8. Your firebase.jsx should look like this:

    ```js
    import {initializeApp} from "firebase/app";
    import {getAuth,GoogleAuthProvider} from 'firebase/auth';
    import {getFirestore} from 'firebase/firestore';
    import {getStorage} from 'firebase/storage'
    
    const firebaseConfig = {
        apiKey: "AIzaSyAFalwNDdkU9PFAUoJKAf8RiU7fmYJa5ek",
        authDomain: "dinseyplus-clone-253b4.firebaseapp.com",
        projectId: "dinseyplus-clone-253b4",
        storageBucket: "dinseyplus-clone-253b4.appspot.com",
        messagingSenderId: "766396328762",
        appId: "1:766396328762:web:c0d5c96d262f667283fe03",
        measurementId: "G-KYZ2GFMR6V"
      };
    
      const firebaseApp=initializeApp(firebaseConfig);
      const db= getFirestore(firebaseApp);
      const auth=getAuth(firebaseApp);
      const provider=new GoogleAuthProvider(auth);
      const storage=getStorage(firebaseApp);
    
      export{auth,provider,storage};
      export default db;
    ```

 9. Set up Firebase authentication in your firebase account

10. In Header.jsx file import the following

    ```js
    import { auth, provider } from '../firebase'
    import { signInWithPopup } from 'firebase/auth'
    ```

11. Add the following Function before return in Header.jsx.

    ```js
    const handleAuth=async()=>{
            try
            {
                const result=await signInWithPopup(auth,provider);
                console.log(result)
            }
            catch(e)
            {
                console.log(e||"Error");
            }
       }
    ```

12. And Call it on Click of Login Button

    ```js
    <LoginButton onClick={handleAuth}>Login</LoginButton>
    ```

13. Header File Should look like this

    ```js
    import React from 'react'
    import styled from 'styled-components'
    import { auth, provider } from '../firebase'
    import { signInWithPopup } from 'firebase/auth'
    
    const Header = () => {
        const handleAuth=async()=>{
            try
            {
                const result=await signInWithPopup(auth,provider);
                console.log(result)
            }
            catch(e)
            {
                console.log(e||"Error");
            }
        }
      return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+"/>
            </Logo>
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
            <LoginButton onClick={handleAuth}>Login</LoginButton>
        </Nav>
      )
    }
    
    const Nav=styled.nav`
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
    
        &:hover{
            background-color: #f9f9f9;
            color:#000;
            
        }
    `;
    export default Header
    ```