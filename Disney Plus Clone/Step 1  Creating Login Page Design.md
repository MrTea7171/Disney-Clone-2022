1. Install Styled Component and React-Router-Dom To design and navigate components

   ```shell
   npm install react-router-dom styled-components
   ```

2. Create Login Component

   ```js
   import React from 'react'
   
   const Login = () => {
     return (
       <div>Login</div>
     )
   }
   
   export default Login
   ```

3. Create Route for Login Component in App.jsx

   ```js
   import React from 'react'
   import { BrowserRouter, Route, Routes } from 'react-router-dom'
   import Login from './components/Login'
   
   const App = () => {
     return (
       <div className="App">
         <BrowserRouter>
           <Routes>
             <Route path="/" exact element={<Login/>}></Route>
           </Routes>
         </BrowserRouter>
       </div>
     )
   }
   
   export default App 
   ```

4. In Login Page Design:

   1. Styled Section

      ```js
      const Container=styled.section`
      overflow:hidden;
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 100vh;
      `;
      ```

   2. Styled Div 

      ```js
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
      ```

   3. Implement them in Login Component

      ```js
      const Login = () => {
        return (
          <Container>
            <Content>Content</Content>
          </Container>
        )
      }
      ```

   4. Login.jsx after these changes:

      ```js
      import React from 'react'
      import styled from 'styled-components';
      
      const Login = () => {
        return (
          <Container>
            <Content>Content</Content>
          </Container>
        )
      }
      
      const Container=styled.section`
      overflow:hidden;
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 100vh;`;
      
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
      
      export default Login
      ```

   ---

5. Loading Background and Login Box Images

    1. Download the [Login Background Image](https://drive.google.com/file/d/1zMssXOSM6jy9VxAhQB6XC6VbLBrBSU4\_/view?usp=share\_link "Download Login-Backgroud") from here.

    2. Create images folder in public folder and copy the image in the folder

    3. Create a Component to manage the image in Login Page

       ```js
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
       ```

    4. Add in Login Component

       ```js
       const Login = () => {
         return (
           <Container>
             <Content><BgImage/></Content>
           </Container>
         )
       }
       ```

    5. Download the first [CTA-LOGO-ONE](https://drive.google.com/file/d/1dc4WjyOZYuC6vBpS6Gfn9kazwH8wRNjj/view?usp=share\_link "download link") image

    6. Add the components to hold img and buttons

       ```js
       const Login = () => {
         return (
           <Container>
             <Content>
               <CTA>
                 <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
               </CTA>
               <BgImage/>
             </Content>
           </Container>
         )
       }
       ```

    7. Define CTA Component- A div to hold Login images and component

       ```js
       const CTA=styled.div`
       max-width:650px;
       width:100%;
       display:flex;
       flex-direction:column;
       justify-content: center;
       align-items: center;
       `;
       ```

    8. Define CTALogoOne Component- A img tag to hold cta logo one image

       ```js
       
       const CTALogoOne=styled.img`
       margin-bottom: 12px;
       max-width:500px;
       min-height: 1px;
       display: block;
       width: 100%;
       `;
       ```

    9. Add the SignUp Button Component

       ```js
       const Login = () => {
         return (
           <Container>
             <Content>
               <CTA>
                 <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                 <SignUp>GET ALL THERE</SignUp>
               </CTA>
               <BgImage/>
             </Content>
           </Container>
         )
       }
       ```

   10. Add Style for The Component

       ```js
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
       ```

   11. Add Description to the Page

       ```js
       const Login = () => {
         return (
           <Container>
             <Content>
               <CTA>
                 <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                 <SignUp>GET ALL THERE</SignUp>
                 <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Diney Bundle will increase by $1.</Description>
               </CTA>
               <BgImage/>
             </Content>
           </Container>
         )
       }
       ```

   12. Style for Description Component

       ```js
       const Description=styled.p`
         color:hlsa(0,0%,95.3%,1);
         margin-bottom:24px;
         line-height: 1.5;
         letter-spacing:1.5px;
       `;
       ```

   13. Add CTALogoTwo Img to the div. [Download Image Here](https://drive.google.com/file/d/15q5EkBrbHVYFQxyffsTsjSGZR3xIaAqc/view?usp=share\_link "Download cta-logo-2")

       ```js
       const Login = () => {
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
       ```

   14. Add  Style to the CTALogoTwo

       ```js
       const CTALogoTwo=styled.img`
         max-width:600px;
         margin-bottom: 20px;
         display: inline-block;
         vertical-align: bottom;
         width:100%;
       `;
       ```

6. Making Navbar:

    1. Create Header.jsx file in Component Folder

    2. Create a PageLayout.jsx file manage display of Component

       ```js
       import React from 'react'
       import { Outlet } from 'react-router-dom'
       import Header from './components/Header'
       
       const PageLayout = () => {
         return (
           <>
               <Header/>
               <Outlet/>
           </>
         )
       }
       
       export default PageLayout
       ```

    3. Add PageLayout.jsx in Route

       ```js
       import React from 'react'
       import { BrowserRouter, Route, Routes } from 'react-router-dom'
       import Login from './components/Login'
       import PageLayout from './PageLayout'
       
       const App = () => {
         return (
           <div className="App">
             <BrowserRouter>
               <Routes>
                 <Route path="/" element={<PageLayout/>}>
                   <Route index element={<Login/>}></Route>
                 </Route>
               </Routes>
             </BrowserRouter>
           </div>
         )
       }
       
       export default App
       ```

    4. Create Header Component

       ```js
       import React from 'react'
       
       const Header = () => {
         return (
           <div>Header</div>
         )
       }
       
       export default Header
       ```

    5. Create Nav Styled Component in Header.jsx

       ```js
       const Nav=styled.nav`
           position: fixed;
           top: 0;
           right: 0;
           left: 0;
           background-color: #090b13;
           height: 4.5em;
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding:0px 2.2em;
           letter-spacing: 1em;
           z-index: 3;
       `;
       ```

    6. Add Nav in Header Component 

       ```js
       const Header = () => {
         return (
           <Nav>Header</Nav>
         )
       }
       ```

    7. Adding Disney+ logo to Navbar. [Click Here to Download Image](https://drive.google.com/file/d/1PHImWaSibgDMIt6V\_iuJKddjtuxaNWYU/view?usp=share\_link "Disney+ Logo"). Add Logo to Images Folder

    8. Creating Logo Component to Style Logo

       ```js
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
       ```

    9. Adding Img and Logo Component to Nav

       ```js
       const Header = () => {
         return (
           <Nav>
               <Logo>
                   <img src="/images/logo.svg" alt="Disney+"/>
               </Logo>
           </Nav>
         )
       ```

   10. Creating NavMenu Component for our Navbar

       ```js
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
       `;
       ```

   11. Adding to our Code

       ```js
       const Header = () => {
         return (
           <Nav>
               <Logo>
                   <img src="/images/logo.svg" alt="Disney+"/>
               </Logo>
               <NavMenu>
                   Menu
               </NavMenu>
           </Nav>
         )
       }
       ```

   12. Now Lets Add the Menu. [Download Home Icon](https://drive.google.com/file/d/1YW0RseDwZx8aebIFODvKBW6qKn44qjGd/view?usp=share\_link "home icon").

       ```js
       const Header = () => {
         return (
           <Nav>
               <Logo>
                   <img src="/images/logo.svg" alt="Disney+"/>
               </Logo>
               <NavMenu>
                   <a href="/Home">
                       <img src="/images/home-icon.svg" alt="HOME" />
                       <span>Home</span>
                   </a>
               </NavMenu>
           </Nav>
         )
       }
       ```

   13. Styling the a tag and span tag with underline on hover animation

       ```js
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
       ```

   14. Lets now add rest of the menu:

       1. Watchlist - [Image](https://drive.google.com/file/d/1divZbXGjHw713OhhDFvBD6OZcdU-rSRx/view?usp=share\_link "Watchlist")

       2. Series- [Image](https://drive.google.com/file/d/12HV\_6Pn8EXAc529b97\_3ki9rtIdHmudr/view?usp=share\_link "Series")

       3. Search- [Image](https://drive.google.com/file/d/1ocFjAX0g2yG8hzLb-GL3Hb1W8KlsUirb/view?usp=share\_link "Search")

       4. Original- [Image](https://drive.google.com/file/d/1ttjv7BTpNmWb2H4iqW2EkCT65ixjDS94/view?usp=share\_link "Origanal")

       5. Movie- [Image](https://drive.google.com/file/d/1x7\_O9IqQCkL65RbtJB\_QPOC2QBbk\_ua9/view?usp=share\_link "Movie")

       ```js
       const Header = () => {
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
           </Nav>
         )
       }
       ```

   15. Designing LoginButton Component For The Navbar 

       ```js
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
       ```

   16. Add LoginButton to your Header Component

       ```js
       const Header = () => {
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
               
               <LoginButton>Login</LoginButton>
           </Nav>
         )
       }
       ```