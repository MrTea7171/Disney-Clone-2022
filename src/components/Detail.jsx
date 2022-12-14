import { getDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import db from '../firebase'

const Detail = () => {
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


export default Detail