import React, { useState } from 'react'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import ContentWrapper from '../../../ContentWrapper/ContentWrapper'
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/Carousel/Carousel';
function UserChoise() {
  const [endpoint, setEndpoint] = useState("day");
  const {data,loading,error} = useFetch(`/trending/movie/${endpoint}`);
  const { data: genresData } = useFetch(`/genre/movie/list`);
   if(genresData){
    console.log(genresData)
   }
  if (error) {
    console.error("Error fetching data:", error);
  }
//   const onTabChange = (tab,index)=>{
//      setEndpoint(tab === "Day"?"day":"week")
//   }
  return (
    
    <div className='carouselSection'>
       <ContentWrapper>
         <span className='carouselTitle'>Your Choise</span>
          {/* <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/> */}
       </ContentWrapper>
       <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default UserChoise