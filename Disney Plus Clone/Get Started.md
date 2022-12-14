    Resources required to complete this project

    [GitHub](https://github.com/CleverProgrammers/cp-disney-plus-clone "GitHub Link")  [Media and Videos](https://drive.google.com/drive/folders/1Y88ZTCdd-Y5r2sxxDOkbh6tx5HStJkbk "Google Drive Link")

    Now Lets Get Started:

1. To get started we will create the react app using:

   ```shell
   npm create vite@latest
   ```

2. Then we will go to the folder and install all the necessary files using:

   ```shell
   npm install
   ```

3. Clear App.css, App.jsx and index.css file

   ---

4. In App.jsx change file code to

   ```js
   import React from 'react'
   
   const App = () => {
     return (
       <div>I am Working on Disney+ Clone 🚀</div>
     )
   }
   
   export default App
   ```

5. And we will add the following code in index.css

   ```css
   html{
     scroll-behavior: smooth;
   }
   
   *{
     box-sizing:border-box;
   }
   
   body{
     background-color: #040714;
     color:#f9f9f9;
     font-family:'Montserrat', sans-serif;
     margin:0;
     padding:0;
   }
   
   a{
     color:#f9f9f9;
     text-decoration: none;
   }
   
   @media only screen and (min-width:768px){
     body{
       font-size: 16px;
     }
   }
   
   @media only screen and (min-width:480px) and (max-width:768px){
     body{
       font-size: 15px;
     }
   }
   
   @media only screen and (max-width:479px){
     body{
       font-size: 14px;
     }
   }
   ```