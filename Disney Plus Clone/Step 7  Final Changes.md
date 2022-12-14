Well the project is completed but i have some final changes before we host it online.

1. To make changes in use effect of our Header.jsx file. This is prevent that annoying going to Home Page on refresh.

   ```js
   useEffect(()=>{
           onAuthStateChanged(auth,(user)=>{
               if(user)
               {
                   setUser(user);
               }
           })
       },[username]);
   ```

2. And add going to homepage on Login Component. So your Complete Login.jsx File will look like this.

   ```js
   import React, { useEffect } from 'react'
   import { useSelector } from 'react-redux';
   import { useNavigate } from 'react-router-dom';
   import styled from 'styled-components';
   import { selectUserName } from '../features/user/userSlice';
   
   const Login = () => {
     const username=useSelector(selectUserName);
     const history=useNavigate();
     useEffect(()=>{
           if(username)
           {
               history('/home');
           }
       },[username]);
     return (
       <Container>
         <Content>
           <CTA>
             <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
             <SignUp>GET ALL THERE</SignUp>
             <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Diney Bundle will increase by $1.</Description>
             <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
           </CTA>
           <BgImage/>
         </Content>
       </Container>
     )
   }
   
   const Container=styled.section`
   overflow:hidden;
   display: flex;
   flex-direction: column;
   text-align: center;
   height: 100vh;
   `;
   
   const Content= styled.div`
   margin-bottom: 10vw;
   width: 100%;
   position: relative;
   min-height: 100vh;
   box-sizing: border-box;
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 80px 40px;
   height: 100%;
   `;
   
   const BgImage=styled.div`
   height: 100%;
   background-size: cover;
   background-repeat: no-repeat;
   background-image: url("/images/login-background.jpg");
   position: absolute;
   top: 0;
   /* used to strech the image */
   left: 0;
   right: 0;
   z-index: -1;
   `;
   
   
   const CTA=styled.div`
   max-width:650px;
   width:100%;
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   `;
   
   const CTALogoOne=styled.img`
   margin-bottom: 12px;
   max-width:600px;
   min-height: 1px;
   display: block;
   width: 100%;
   `;
   
   const SignUp=styled.a`
     font-weight:bold;
     color:#f9f9f9;
     background-color: #0063e5;
     margin-bottom: 12px;
     width:100%;
     letter-spacing: 1.5px;
     font-size:1.7em;
     padding: 1em 0;
     border: 1pxx solid transparent;
     border-radius:.25em;
   
     &:hover{
       background-color: #0483ee;
     }
   `;
   
   const Description=styled.p`
     color:hlsa(0,0%,95.3%,1);
     margin-bottom:24px;
     line-height: 1.5;
     letter-spacing:1.5px;
   `;
   
   
   const CTALogoTwo=styled.img`
     max-width:600px;
     margin-bottom: 20px;
     display: inline-block;
     vertical-align: bottom;
     width:100%;
   `;
   export default Login
   ```