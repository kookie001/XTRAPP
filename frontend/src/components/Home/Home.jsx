import React from 'react'
import Sections from './Sections'
import Media from './Media'
import Features from './Features'
import Tag from './Tag'
import Main from './Main'
import Header from '../header/Header'

function Home() {
  return (
    <>
    <Header/>
    <Main/>
   <Media/>
   <Tag/>
   <Features/>
   <Sections/>
  </>
  )
}

export default Home
