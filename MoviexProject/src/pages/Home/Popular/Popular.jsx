import React, { useState } from 'react'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import ContentWrapper from '../../../ContentWrapper/ContentWrapper'
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/Carousel/Carousel';
function Popular() {
  const [endpoint, setEndpoint] = useState("movie");
  const {data,loading,error} = useFetch(`/${endpoint}/popular`);
  if (error) {
    console.error("Error fetching data:", error);
  }
  const onTabChange = (tab,index)=>{
     setEndpoint(tab === "Movies"?"movie":"tv")
  }
  return (
    
    <div className='carouselSection'>
       <ContentWrapper>
         <span className='carouselTitle'>What's Popular</span>
          <SwitchTabs data={["Movies","Tv shows"]} onTabChange={onTabChange}/>
       </ContentWrapper>
       <Carousel data={data?.results} loading={loading} 
        endpoint={endpoint}
       />
    </div>
  )
}

export default Popular