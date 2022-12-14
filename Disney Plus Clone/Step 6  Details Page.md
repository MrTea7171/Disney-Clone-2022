 1. Create Details.jsx Page in component

    ```js
    import React from 'react'
    
    const Detail = () => {
      return (
        <div>Detail</div>
      )
    }
    
    export default Detail
    ```

 2. Add Details in App.jsx Route

    ```js
    const App = () => {
      return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageLayout/>}>
                <Route index element={<Login/>}></Route>
                <Route exact path='home' element={<Home/>}></Route>
                <Route exact path='details/:id' element={<Details/>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )
    }
    ```

 3. In Details Component add Container and Background Img Styled Component

    ```js
    const Details = () => {
      return (
        <Container>
          <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg" alt =""/>
          </Background>
        </Container>
      )
    }
    ```

    ```js
    const Container=styled.main`
      position: relative;
      min-height: calc(100vh-250px);
      overflow-x: hidden;
      display:block;
      padding:0 calc(0.5vw + 25px);
      top: 75px;
    `;
    
    const Background=styled.div`
      opacity:0.8;
      position: fixed;
      left:0px;
      right:0px;
      top:0px;
      z-index:-1;
    
      img{
        width: 100vw;
    
        @media screen and (max-width:768px){
          width:initial;
        }
      }
    `;
    ```

 4. Add ImageTitle Styled Component to show TitleImg

    ```js
          <ImageTitle>
            <img
              alt=''
              src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78'
            />
          </ImageTitle>
    ```

    ```js
    const ImageTitle=styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin:0px auto;
    height: 30vw;
    min-height: 170px;
    padding-top: 24px;
    width:100%;
    
    img{
      max-width: 600px;
      min-width: 200px;
      width:35vw;
    
    }
    `;
    ```

 5. Creating ContentMeta Tag to display and style content. Content Tag to display and style play section.

    ```js
          <ContentMeta>
            <Controls>
              controls
            </Controls>
          </ContentMeta>
    ```

    ```js
    const ContentMeta=styled.div`
      max-width:874px;
    `;
    
    const Controls=styled.div`
      display:flex;
      align-items:center;
      flex-flow: row nowrap;
      margin:24px 0px;
      min-height: 56px;
    `;
    ```

 6. Working in Controls div. Download PlayButton and Group Icon Images. [Image 1](https://drive.google.com/file/d/1woFo6x1EV1oLDNnZ8-k8n6zj\_m898KFd/view?usp=share\_link "play-black") , [Image 2](https://drive.google.com/file/d/1iv9Ay3acwnrXHJmmB3ZTaICOuaKQ21nE/view?usp=share\_link "play-white") , [Image 3](https://drive.google.com/file/d/1H4g1\_2x7P2HwU9OP79GKPWBvvLY8q\_Pc/view?usp=share\_link "Group Icon").

 7. Adding a Play tag inside the Controls to design the play button.

    ```js
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
            </Controls>
          </ContentMeta>
    ```

    ```js
    const Player=styled.button`
    font-size:15px;
    font-weight: 500;
    margin:0px 22px 0px 0px;
    padding:0px 24px;
    height: 54px;
    border-radius:4px;
    align-items: center;
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background-color: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);
    
    img{
      width: 32px;
      margin-right: 2px;
    }
    
    &:hover{
        background-color: rgb(198,198,198);
      }
    
    @media (max-width:768px)
    {
      height: 45px;
      padding: 0px 22px;
      font-size:14px;
      margin:0px;
      margin-right: 10px;
    
      img{
        width:25px;
      }
    }
    `;
    ```

 8. Adding Trailer Component below Player Component

    ```js
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
            </Controls>
          </ContentMeta>
    ```

    ```js
    const Trailer=styled(Player)`
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgb(249, 249, 249);
      color: rgb(249, 249, 249);
    `;
    ```

 9. Making AddToList Component inside our Controls

    ```js
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
            </Controls>
          </ContentMeta>
    ```

    ```js
    const AddList = styled.div`
      margin-right: 16px;
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      border: 2px solid white;
      cursor: pointer;
    
      span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
          height: 2px;
          transform: translateX(1px);
          width: 16px;
        }
        &:nth-child(2) {
          height: 16px;
          transform: translateX(-8px);
          width: 2px;
        }
      }
    `;
    ```

10. Adding GroupWatch inside our Controls

    ```js
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt=""/>
                </div>
              </GroupWatch>
            </Controls>
    ```

    ```js
    const GroupWatch=styled.div`
      height: 44px;
      width: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255,255,255);
      cursor: pointer;
    
      div{
        height: 40px;
        width: 40px;
        background-color: rgb(0,0,0);
        border-radius: 50%;
    
        img{
          width:100%;
        }
      }
    `;
    ```

11. Adding Subtitle and Description Component

    ```js
    const Details = () => {
      
      return (
        <Container>
          <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg" alt =""/>
          </Background>
          <ImageTitle>
            <img
              alt=''
              src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78'
            />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt=""/>
                </div>
              </GroupWatch>
            </Controls>
            <Subtitle>
              Subtitle
            </Subtitle>
            <Description>
              Description
            </Description>
    
          </ContentMeta>
        </Container>
      )
    }
    ```

    ```js
    const Subtitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height: 20px;
    @media screen and (max-width:768px){
      font-size:16px;
    }
    `;
    const Description=styled.div`
    line-height: 1.4;
    font-size:18px;
    padding:16px 0px;
    color:rgb(249,249,249); 
    
    @media screen and (max-width:768px){
      font-size:15px;
    }
    `;
    ```

12. Now Lets Make the Details Section Dyanamic

    ```js
    const Details = () => {
      const {id}=useParams();
      const [detailData,setDetailData]=useState({});
    
    
      useEffect(()=>{
        getDoc(doc(db,'newMovies',id)).then((result)=>{
          setDetailData(result.data());
        })
        .catch((e)=>{
          console.log(e.message||"Document Does not exist.🚀");
        })
      },[id])
    
      return (
        <Container>
          <Background>
            <img src={detailData.backgroundImg} alt =""/>
          </Background>
          <ImageTitle>
            <img
              alt=''
              src={detailData.titleImg}
            />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt=""/>
                </div>
              </GroupWatch>
            </Controls>
            <Subtitle>
              {detailData.subTitle}
            </Subtitle>
            <Description>
              {detailData.description}
            </Description>
    
          </ContentMeta>
        </Container>
      )
    }
    ```

13. BOOM !! The Details Page is Complete 💯. Final Look should be like this. #complete:

    ```js
    import { getDoc, doc } from 'firebase/firestore'
    import React, { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'
    import styled from 'styled-components'
    import db from '../firebase'
    
    const Details = () => {
      const {id}=useParams();
      const [detailData,setDetailData]=useState({});
    
    
      useEffect(()=>{
        getDoc(doc(db,'newMovies',id)).then((result)=>{
          setDetailData(result.data());
        })
        .catch((e)=>{
          console.log(e.message||"Document Does not exist.🚀");
        })
      },[id])
    
      return (
        <Container>
          <Background>
            <img src={detailData.backgroundImg} alt =""/>
          </Background>
          <ImageTitle>
            <img
              alt=''
              src={detailData.titleImg}
            />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt=''/>
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt=""/>
                </div>
              </GroupWatch>
            </Controls>
            <Subtitle>
              {detailData.subTitle}
            </Subtitle>
            <Description>
              {detailData.description}
            </Description>
    
          </ContentMeta>
        </Container>
      )
    }
    
    const Container=styled.main`
      position: relative;
      min-height: calc(100vh-250px);
      overflow-x: hidden;
      display:block;
      padding:0 calc(0.5vw + 25px);
      top: 70px;
    `;
    
    const Background=styled.div`
      opacity:0.8;
      position: fixed;
      left:0px;
      right:0px;
      top:0px;
      z-index:-1;
    
      img{
        width: 100vw;
    
        @media screen and (max-width:768px){
          width:initial;
        }
      }
    
    `;
    
    
    const ImageTitle=styled.div`
      display:flex;
      align-items: flex-end;
      justify-content: flex-start;
      margin:0px auto;
      height: 28vw;
      min-height: 170px;
      padding-top: 24px;
      width:100%;
    
      img{
        max-width: 600px;
        min-width: 200px;
        width:35vw;
    
      }
    `;
    
    const ContentMeta=styled.div`
      max-width:874px;
    `;
    
    const Controls=styled.div`
      display:flex;
      align-items:center;
      flex-flow: row nowrap;
      margin:24px 0px;
      min-height: 56px;
    `;
    
    const Player=styled.button`
      font-size:15px;
      font-weight: 500;
      margin:0px 22px 0px 0px;
      padding:0px 24px;
      height: 56px;
      border-radius:4px;
      align-items: center;
      cursor:pointer;
      display:flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1.8px;
      text-align: center;
      text-transform: uppercase;
      background-color: rgb(249,249,249);
      border: none;
      color: rgb(0,0,0);
    
      img{
        width: 32px;
        margin-right: 2px;
      }
    
      &:hover{
          background-color: rgb(198,198,198);
        }
    
      @media (max-width:768px)
      {
        height: 45px;
        padding: 0px 22px;
        font-size:14px;
        margin:0px;
        margin-right: 10px;
    
        img{
          width:25px;
      }
    }
    `;
    
    const Trailer=styled(Player)`
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgb(249, 249, 249);
      color: rgb(249, 249, 249);
    `;
    
    const AddList = styled.div`
      margin-right: 16px;
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      border: 2px solid white;
      cursor: pointer;
    
      span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
          height: 2px;
          transform: translateX(1px) rotate(0deg);
          width: 16px;
        }
        &:nth-child(2) {
          height: 16px;
          transform: translateX(-8px) rotate(0deg);
          width: 2px;
        }
      }
    `;
    
    const GroupWatch=styled.div`
      height: 44px;
      width: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255,255,255);
      cursor: pointer;
    
      div{
        height: 40px;
        width: 40px;
        background-color: rgb(0,0,0);
        border-radius: 50%;
    
        img{
          width:100%;
        }
      }
    `;
    
    const Subtitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height: 20px;
    @media screen and (max-width:768px){
      font-size:16px;
    }
    `;
    const Description=styled.div`
    line-height: 1.4;
    font-size:18px;
    padding:16px 0px;
    color:rgb(249,249,249); 
    
    @media screen and (max-width:768px){
      font-size:15px;
    }
    `;
    
    
    export default Details
    ```

   