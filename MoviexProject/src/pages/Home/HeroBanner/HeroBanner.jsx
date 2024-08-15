import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import "./style.scss"
import Img from '../../../components/lazyLoadImages/img'
import ContentWrapper from '../../../ContentWrapper/ContentWrapper'
import {useSelector} from 'react-redux' 
function HeroBanner() {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
   
   const {url} = useSelector((state => state.home))
   const navigate = useNavigate();

  const {data,loading} = useFetch("/movie/upcoming")

  // select randome bg
   useEffect(()=>{
     const bg = url.backdrop
     + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
      setBackground(bg)
   },[data])
   
  const searchQueryHandler = (e)=>{
      if(e.key === "Enter" && query.length > 0)
      navigate(`/search/${query}`)
  }
   
  return (
    <div className='heroBanner'>
       {!loading && <div className='backdrop_img'>
         <img src={background}/>
       </div>}
       
       <div className='opacity_layer
       '></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome</span>
          <span className='subTitle'>Millions of movies TV show and people to discover. Explore now</span>
            <div className='search_input'>
              <input

              onChange={(e)=> setQuery(e.target.value)}
               onKeyUp={searchQueryHandler}
               type='text' placeholder='Search for a movie or Tv show...' />
               <button
               >Search</button>
            </div>
        </div>
       </ContentWrapper>
     </div>
  )
}

export default HeroBanner