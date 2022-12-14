import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../features/user/userSlice';
import {setMovies} from "../features/movie/movieSlice"
import { collection, onSnapshot } from "firebase/firestore";
import db from '../firebase'

const Home = () => {

  const dispatch =useDispatch();
  const username =useSelector(selectUserName);
  let recommends=[];
  let originals=[];
  let newDisneys=[];
  let trendings=[];

  useEffect(()=>{
    onSnapshot(collection(db,"newMovies"),(snapshot)=>{
      snapshot.docs.map((doc)=>{
        switch(doc.data().type)
        {
          case `recommend`:
            recommends=[...recommends,{id: doc.id ,...doc.data()}]
            break;
          case 'new':
            newDisneys=[...newDisneys,{id: doc.id ,...doc.data()}]
            break;
          case 'original':
            originals=[...originals,{id: doc.id ,...doc.data()}]
            break;
          case 'trending':
            trendings=[...trendings,{id: doc.id ,...doc.data()}]
            break;
        }
      })
      dispatch(setMovies({
        recommend:recommends,
        newDisney:newDisneys,
        original:originals,
        trending:trendings
      }))

      recommends=[];
      originals=[];
      newDisneys=[];
      trendings=[];
    });
  },[username]);

  
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals />
      <Trending/>
    </Container>
  )
}

const Container=styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display:block;
padding:0 calc(0.5vw + 5px);
top: 75px;

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
export default Home