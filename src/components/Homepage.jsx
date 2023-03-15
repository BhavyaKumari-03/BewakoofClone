import React from 'react'

import Editor from './Editor'

import Anime from './Anime'
import Maincontent from './Maincontent'
import Slider from './Slider'
import Footer from './Footer'

function Homepage() {
  return (
    <>
    <Editor/>
    <Slider/>
    <Anime/>
    <Maincontent/>
    <Footer/>
    </>
  )
}

export default Homepage