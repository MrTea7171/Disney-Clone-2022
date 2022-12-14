1. In Home.jsx create an styled main called Container.  [Home Background Image](https://drive.google.com/file/d/1gNJnXx3xxukwya6DAZHKHtAPVzxqUaW6/view?usp=share\_link "Home Bg")

   ```js
   const Container=styled.main`
   position: relative;
   min-height: calc(100vh - 250px);
   overflow-x: hidden;
   display:block;
   padding:0 calc(.5vw + 5px);
   padding-top: 70px;
   
   &::after{
       content:'';
       background: url('/images/home-background.png') center no-repeat fixed;
       background-size:cover;
       position:absolute;
       /* inset is shorthand for top right bottom left */
       inset:0px;
       opacity: 1;
       height:100%;
       z-index:-1;
   }
   `;
   ```

2. Add Container to Home Component

   ```js
   const Home = () => {
     return (
       <Container>
       <h1>Hello</h1>
       </Container>
     )
   }
   ```

3. Add Slider to HomePage.jsx

    1. Create ImgSlider Component. Create a ImgSlider.jsx in Component folder.

    2. Import ImgSlider Component in Home.jsx

       ```js
       const Home = () => {
         return (
           <Container>
             <ImgSlider/>
           </Container>
         )
       }
       ```

    3. For Slider we will be using React Slick. [Click here](https://react-slick.neostack.com/ "react-slick") to check out.

    4. Install Carousel libraries

       ```shell
       npm install react-slick slick-carousel
       ```

    5. In ImgSlider.jsx import following

       ```js
       import "slick-carousel/slick/slick.css";
       import "slick-carousel/slick/slick-theme.css";
       import Slider from "react-slick";
       ```

    6. Define ImgSlider Components

       ```js
       const ImgSlider = () => {
           var settings = {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1
           };
           return (
               <Carousel{...settings}>
                   <div>
                       <h3>1</h3>
                   </div>
                   <div>
                       <h3>2</h3>
                   </div>
                   <div>
                       <h3>3</h3>
                   </div>
                   <div>
                       <h3>4</h3>
                   </div>
                   <div>
                       <h3>5</h3>
                   </div>
                   <div>
                       <h3>6</h3>
                   </div>
               </Carousel>
           );
       }
       ```

    7. Make Carousel Component which will style the Slider of react-slick

       ```js
       const Carousel =styled(Slider)`
           /*decrease img width*/
           padding:0px 1.5em;
       
           margin-top: 20px;
           &>button{
               opacity:0;
               height: 100%;
               width: 5vw;
               z-index: 1;
       
               &:hover{
                   opacity: 1;
                   transition: opacity 0.2s ease-in;
               }
           }
       
           ul li button{
               &:before{
                   font-size:10px;
                   color:rgb(150,158,171);
               }
           }
       
           li.slick-active button:before{
               color: #f9f9f9;
           }
       
           .slick-list{
               /* initial means default value */
               overflow:initial;
           }
       
           .slick-prev{
               left:-50px;
           }
       
           .slick-next{
               right:-50px;
           }
       `;
       ```

    8. Add these images to images folder.

       [Image-1](https://drive.google.com/file/d/1UkaHT1dEHH1GwsRTacdb3h6ee29SZUzx/view?usp=share\_link "Image 1 Link")  || [Image-2](https://drive.google.com/file/d/1Qv-vpZbDoyGUE2o6qa6SDTU\_98ME\_63R/view?usp=share\_link "Image 2 Link") ||  [Image-3](https://drive.google.com/file/d/1zKlFiJD4Xg8o8lnH-6iEE76tWCEgbJs5/view?usp=share\_link "Image 3 Link") || [Image-4](https://drive.google.com/file/d/1fggdhMjkVw1w2NN-xvb3OT5YQ3Xu58x6/view?usp=share\_link "Image-4")

    9. Add Images to Carousel Component 

       ```js
       const ImgSlider = () => {
           var settings = {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1
           };
           return (
               <Carousel{...settings}>
                   <Wrap>
                       <a>
                           <img src="/images/slider-badging.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-scale.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-badag.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-scales.jpg" alt=""/>
                       </a>
                   </Wrap>
               </Carousel>
           );
       }
       ```

   10. Lets Define Wrap

       ```js
       const Wrap=styled.div`
           border-radius:4px;
           position:relative;
           cursor:pointer;
       
           a{
               border-radius:4px;
               box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
               display: block;
               position:relative;
               padding:0 4px;
       
       
               img{
                   width:100%;
                   height:100%;
               }
       
               &:hover{
                   padding:0;
                   border:4px solid rgba(249,249,249, 0.8);
                   transition-duration: 300ms;
       
               }
           }
       `;
       ```

   11. ImgSlider.jsx is done 💯. Final Look should be like this. #complete:

       ```js
       import React from 'react'
       import "slick-carousel/slick/slick.css";
       import "slick-carousel/slick/slick-theme.css";
       import Slider from "react-slick";
       import styled from 'styled-components';
       
       const ImgSlider = () => {
           var settings = {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1
           };
           return (
               <Carousel{...settings}>
                   <Wrap>
                       <a>
                           <img src="/images/slider-badging.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-scale.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-badag.jpg" alt=""/>
                       </a>
                   </Wrap>
                   <Wrap>
                       <a>
                           <img src="/images/slider-scales.jpg" alt=""/>
                       </a>
                   </Wrap>
               </Carousel>
           );
       }
       
       const Carousel =styled(Slider)`
           padding:0px 1.5em;
           margin-top: 20px;
           &>button{
               opacity:0;
               height: 100%;
               width: 5vw;
               z-index: 1;
       
               &:hover{
                   opacity: 1;
                   transition: opacity 0.2s ease-in;
               }
           }
       
           ul li button{
               &:before{
                   font-size:10px;
                   color:rgb(150,158,171);
               }
           }
       
           li.slick-active button:before{
               color: #f9f9f9;
           }
       
           .slick-list{
               /* initial means default value */
               overflow:initial;
           }
       
           .slick-prev{
               left:-50px;
           }
       
           .slick-next{
               right:-50px;
           }
       `;
       
       const Wrap=styled.div`
           border-radius:4px;
           position:relative;
           cursor:pointer;
       
           a{
               border-radius:4px;
               box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
               display: block;
               position:relative;
               padding:0 4px;
       
       
               img{
                   width:100%;
                   height:100%;
               }
       
               &:hover{
                   padding:0;
                   border:4px solid rgba(249,249,249, 0.8);
                   transition-duration: 300ms;
       
               }
           }
       `;
       
       export default ImgSlider 
       ```

4. Now Lets Create the Viewers Component

    1. Create Viewers.jsx file inside component folder.

    2. Import Viewers Component in Home.jsx

       ```js
       const Home = () => {
         return (
           <Container>
             <ImgSlider/>
             <Viewers/>
           </Container>
         )
       }
       ```

    3. Create Viewers Component

       ```js
       const Viewers = () => {
         return (
           <Container>
               <div>1</div>
               <div>2</div>
               <div>3</div>
               <div>4</div>
               <div>5</div>
           </Container>
         )
       }
       ```

    4. Define Container Component

       ```js
       const Container=styled.div`
           margin-top:30px;
           padding:30px 0px 26px;
           display: grid;
           grid-gap:25px;
           gap:25px;
           grid-template-columns: repeat(5,minmax(0,1fr));
       
           @media(max-width:768px){
               grid-template-columns: repeat(1,minmax(0,1fr));
           }
       `;
       ```

    5. Download Images:

       [Image-1](https://drive.google.com/file/d/1OB09l0dEpBm4bg5J6r5ijZTDZ-pp8qTR/view?usp=share\_link "viewer-disney")  || [Image-2](https://drive.google.com/file/d/1JyCJMIgBzuaCrl5BHB\_a3QBNIg55-Rmm/view?usp=share\_link "viewer-marvel") ||  [Image-3](https://drive.google.com/file/d/18BtYn7aOvzAjyS3qQudO\_Dpb94IfDoXh/view?usp=share\_link "viewer-national") || [Image-4](https://drive.google.com/file/d/18BtYn7aOvzAjyS3qQudO\_Dpb94IfDoXh/view?usp=share\_link "viwer-pixar") || [Image-5](https://drive.google.com/file/d/1em4uO0cKEQuAjl\_bsYH-hwX7rnKY866l/view?usp=share\_link "viewer-starwars")

    6. Add Images in Viewers Component

       ```js
       const Viewers = () => {
         return (
           <Container>
               <Wrap>
                   <img src="/images/viewers-disney.png" alt=""/>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-marvel.png" alt=""/>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-national.png" alt=""/>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-pixar.png" alt=""/>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-starwars.png" alt=""/>
               </Wrap>
           </Container>
         )
       }
       ```

    7. Define Wrap for Viewers.jsx

       ```js
       const Wrap=styled.div`
           padding-top: 56.25%;
           border-radius: 10px;
           box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
           overflow:hidden;
           position: relative;
           transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
           border:3px solid rgba(249,249,249,0.1);
       
       
           img{
               position: absolute;
               inset:0px;
               display: block;
               height: 100%;
       
               /* for video */
               object-fit: cover;
               opacity: 1;
               transition: opacity 500ms ease-in-out 0%;
               width:100%;
               z-index:1;
               top:0;
           }
       `;  
       ```

    8. Lets Add Video to our Viewers:

       [Video-1](https://drive.google.com/file/d/1dDv-\_CUuqeXKy1luGKRBNqd9jG47dbdI/view?usp=share\_link "Disney Video") || [Video-2](https://drive.google.com/file/d/1YENCr-RMxstzd3oyLWhqvbCQeJT94e23/view?usp=share\_link "Marvel Video") || [Video-3](https://drive.google.com/file/d/1HrTjxGZWN1i4GeFebHSPWCMVH9CiUS00/view?usp=share\_link "National Geographic") || [Video-4](https://drive.google.com/file/d/1roYif6xZVTGQAiMIbXx4YAlytYTCDNRD/view?usp=share\_link "Pixar Video") || [Video-5](https://drive.google.com/file/d/1W-v2eK6fVCZlVhDFLljToRscnFBGNZTI/view?usp=share\_link "Star Wars Video")

       create a videos folder in public folder and ad these videos

    9. Lets include videos in our Viewers Component

       ```js
       const Viewers = () => {
         return (
           <Container>
               <Wrap>
                   <img src="/images/viewers-disney.png" alt=""/>
                   {/* videos cannot be autoplay without muted */}
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-pixar.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-marvel.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-starwars.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-national.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
           </Container>
         )
       }
       ```

   10. Lets style the video in our Viewers.jsx

       ```js
       const Wrap=styled.div`
           padding-top: 56.25%;
           border-radius: 10px;
           box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
           overflow:hidden;
           position: relative;
           transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
           border:3px solid rgba(249,249,249,0.1);
       
       
           img{
               position: absolute;
               inset:0px;
               display: block;
               height: 100%;
       
               /* for video */
               object-fit: cover;
               opacity: 1;
               transition: opacity 500ms ease-in-out 0%;
               width:100%;
               z-index:1;
               top:0;
           }
       
           video{
               width: 100%;
               height: 100%;
               position: absolute;
               top: 0%;
               opacity: 0;
               z-index: 0;
           }
       
           &:hover{
               box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
               transform: scale(1.08);
               border-color: rgba(249,249,249,0.8);
               
               video{
                   opacity: 1;
               }
           }
       `;
       ```

   11. Now a little bit of personal javascript to make sure video restarts on hover

       ```js
       useEffect(()=>{
               const allVideos=document.querySelectorAll(Wrap);
               function resetVideo () {
                   const video=this.querySelector('video');
                   if (!video.paused) {
                       video.pause();
                       video.currentTime = 0;
                   }
               }
               function playVideo () {
                   const video=this.querySelector('video');
                   if (video.paused) {
                       video.play();
                   }
               }
               allVideos.forEach((Element)=>{
               {
                   Element.addEventListener('mouseover', playVideo);
                   Element.addEventListener('mouseout', resetVideo);
               }});
               return(()=>{
                   allVideos.forEach((Element)=>{
                       Element.removeEventListener('mouseover', playVideo);
                       Element.removeEventListener('mouseout', resetVideo);
                   })
               })
           
           },[])
       ```

   12. BOOM !! The Viewers.jsx is Complete 💯. Final Look should be like this. #complete:

       ```js
       import React, { useEffect } from 'react'
       import styled from 'styled-components';
       
       const Viewers = () => {
           useEffect(()=>{
               const allVideos=document.querySelectorAll(Wrap);
               function resetVideo () {
                   const video=this.querySelector('video');
                   if (video.playing) {
                   video.pause();
                   video.currentTime = 0;
                   }
               }
               function playVideo () {
                   const video=this.querySelector('video');
                   if (video.paused) {
                       video.play();
                   }
               }
               allVideos.forEach((Element)=>{
               {
                   Element.addEventListener('mouseover', playVideo);
                   Element.addEventListener('mouseout', resetVideo);
               }});
               console.log("Event Added");
           
               return(()=>{
                   allVideos.forEach((Element)=>{
                       Element.removeEventListener('mouseover', playVideo);
                       Element.removeEventListener('mouseout', resetVideo);
                   })
                   console.log("Event Removed");
               })
           
           },[])
         return (
           <Container>
               <Wrap>
                   <img src="/images/viewers-disney.png" alt=""/>
                   {/* videos cannot be autoplay without muted */}
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-pixar.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-marvel.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-starwars.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
               <Wrap>
                   <img src="/images/viewers-national.png" alt=""/>
                   <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                       <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                   </video>
               </Wrap>
           </Container>
         )
       }
       
       const Container=styled.div`
           margin-top:30px;
           padding:30px 20px 26px;
           display: grid;
           grid-gap:25px;
           gap:25px;
           grid-template-columns: repeat(5,minmax(0,1fr));
       
           @media(max-width:768px){
               grid-template-columns: repeat(1,minmax(0,1fr));
           }
       `;
       
       const Wrap=styled.div`
           padding-top: 56.25%;
           border-radius: 10px;
           box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
           overflow:hidden;
           position: relative;
           transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
           border:3px solid rgba(249,249,249,0.1);
       
       
           img{
               position: absolute;
               inset:0px;
               display: block;
               height: 100%;
       
               /* for video */
               object-fit: cover;
               opacity: 1;
               transition: opacity 500ms ease-in-out 0%;
               width:100%;
               z-index:1;
               top:0;
           }
       
           video{
               width: 100%;
               height: 100%;
               position: absolute;
               top: 0%;
               opacity: 0;
               z-index: 0;
           }
       
           &:hover{
               box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
               transform: scale(1.08);
               border-color: rgba(249,249,249,0.8);
               
               video{
                   opacity: 1;
               }
           }
       `;  
       
       
       export default Viewers
       ```

5. Now its time to work on recommends section🎥

   1. Lets create the Recommends.jsx file in component.

   2. Add template code in it

      ```js
      import React from 'react'
      
      const Recommends = () => {
        return (
          <div>Recommends</div>
        )
      }
      
      export default Recommends
      ```

   3. Include it in Home Component

      ```js
      const Home = () => {
        return (
          <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
          </Container>
        )
      }
      ```

   4. Define the Recommends Component to set its layout

      ```js
      const Recommends = () => {
          return (
          <Container>
              <h3>Recommened For You</h3>
              <Content>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
              </Content>
          </Container>
        );
      }
      ```

   5. Lets Define the Container and Content

      ```js
      const Container=styled.div`
          padding: 0 0 26px;
      `;
      
      const Content=styled.div`
      display:grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(4,minmax(0,1fr));
      
      
      @media (max-width:768px)
      {
          grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `;
      ```

   6. Lets add Images to the Recommends Component

      ```js
      const Recommends = () => {
          return (
          <Container>
              <h3>Recommened For You</h3>
              <Content>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
              </Content>
          </Container>
        );
      }
      ```

   7. Define the Wrap Component

      ```js
      const Wrap=styled.div`
          padding-top:56.25%;
          border-radius:10px;
          box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
          overflow: hidden;
          cursor:pointer;
          position:relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border:3px solid rgba(249,249,249,0.1);
      
          img{
              position: absolute;
              inset: 0px;
              display: block;
              height: 100%;
              object-fit: cover;
              opacity: 1;
              transition: opacity 500ms ease-in-out 0s;
              width: 100%;
              z-index: 1;
              top:0;
          }
      
          &:hover{
              box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
              transform: scale(1.05);
              border-color: rgba(249,249,249,0.8);
          }
      `;
      ```

   8. BOOM !! The Recommends .jsx is Complete 💯. Final Look should be like this. #complete:

      ```js
      import React from 'react'
      import { Link } from 'react-router-dom';
      import styled from 'styled-components';
      
      const Recommends = () => {
          return (
          <Container>
              <h3>Recommened For You</h3>
              <Content>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
              </Content>
          </Container>
        );
      }
      
      const Container=styled.div`
          padding: 0 0 26px;
      `;
      
      const Content=styled.div`
      display:grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(4,minmax(0,1fr));
      
      
      @media (max-width:768px)
      {
          grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `;
      
      const Wrap=styled.div`
          padding-top:56.25%;
          border-radius:10px;
          box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
          overflow: hidden;
          cursor:pointer;
          position:relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border:3px solid rgba(249,249,249,0.1);
      
          img{
              position: absolute;
              inset: 0px;
              display: block;
              height: 100%;
              object-fit: cover;
              opacity: 1;
              transition: opacity 500ms ease-in-out 0s;
              width: 100%;
              z-index: 1;
              top:0;
          }
      
          &:hover{
              box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
              transform: scale(1.05);
              border-color: rgba(249,249,249,0.8);
          }
      `;
      
      export default Recommends
      ```

6. For NewDisney, Originals and Trending we will have the same file as Recommends just Name will change.

   1. New Disney. Final Look should be like this. #complete:

      ```js
      import React from 'react'
      import { Link } from 'react-router-dom';
      import styled from 'styled-components';
      
      const NewDisney = () => {
          return (
          <Container>
              <h3>New to Disney+</h3>
              <Content>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
              </Content>
          </Container>
        );
      }
      
      const Container=styled.div`
          padding: 0 0 26px;
      `;
      
      const Content=styled.div`
      display:grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(4,minmax(0,1fr));
      
      
      @media (max-width:768px)
      {
          grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `;
      
      const Wrap=styled.div`
          padding-top:56.25%;
          border-radius:10px;
          box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
          overflow: hidden;
          cursor:pointer;
          position:relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border:3px solid rgba(249,249,249,0.1);
      
          img{
              position: absolute;
              inset: 0px;
              display: block;
              height: 100%;
              object-fit: cover;
              opacity: 1;
              transition: opacity 500ms ease-in-out 0s;
              width: 100%;
              z-index: 1;
              top:0;
          }
      
          &:hover{
              box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
              transform: scale(1.05);
              border-color: rgba(249,249,249,0.8);
          }
      `;
      
      export default NewDisney
      ```

   2. Originals . Final Look should be like this. #complete:

      ```js
      import React from 'react'
      import { Link } from 'react-router-dom';
      import styled from 'styled-components';
      
      const Originals  = () => {
          return (
          <Container>
              <h3>Disney+ Originals</h3>
              <Content>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
              </Content>
          </Container>
        );
      }
      
      const Container=styled.div`
          padding: 0 0 26px;
      `;
      
      const Content=styled.div`
      display:grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(4,minmax(0,1fr));
      
      
      @media (max-width:768px)
      {
          grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `;
      
      const Wrap=styled.div`
          padding-top:56.25%;
          border-radius:10px;
          box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
          overflow: hidden;
          cursor:pointer;
          position:relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border:3px solid rgba(249,249,249,0.1);
      
          img{
              position: absolute;
              inset: 0px;
              display: block;
              height: 100%;
              object-fit: cover;
              opacity: 1;
              transition: opacity 500ms ease-in-out 0s;
              width: 100%;
              z-index: 1;
              top:0;
          }
      
          &:hover{
              box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
              transform: scale(1.05);
              border-color: rgba(249,249,249,0.8);
          }
      `;
      
      export default Originals
      ```

   3. Trending . Final Look should be like this. #complete:

      ```js
      import React from 'react'
      import { Link } from 'react-router-dom';
      import styled from 'styled-components';
      
      const Trending = () => {
          return (
          <Container>
              <h3>Trending on Disney+</h3>
              <Content>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
                  <Wrap>
                      <Link to="/">
                          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg' alt=''/>
                      </Link>
                  </Wrap>
              </Content>
          </Container>
        );
      }
      
      const Container=styled.div`
          padding: 0 0 26px;
      `;
      
      const Content=styled.div`
      display:grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(4,minmax(0,1fr));
      
      
      @media (max-width:768px)
      {
          grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `;
      
      const Wrap=styled.div`
          padding-top:56.25%;
          border-radius:10px;
          box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
          overflow: hidden;
          cursor:pointer;
          position:relative;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border:3px solid rgba(249,249,249,0.1);
      
          img{
              position: absolute;
              inset: 0px;
              display: block;
              height: 100%;
              object-fit: cover;
              opacity: 1;
              transition: opacity 500ms ease-in-out 0s;
              width: 100%;
              z-index: 1;
              top:0;
          }
      
          &:hover{
              box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
              transform: scale(1.05);
              border-color: rgba(249,249,249,0.8);
          }
      `;
      
      export default Trending
      ```