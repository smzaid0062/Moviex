import React from 'react'
import './style.scss'
import HeroBanner from "./HeroBanner/HeroBanner"
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
function Home() {
  return (
    <div className='home_page'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
     </div>
  )
}

export default Home