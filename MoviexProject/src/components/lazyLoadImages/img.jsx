import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
// import "react-lazay-load-images-component/src/effects/blur.css"

const Img = ({src, className}) => {
  return (
    <LazyLoadImage 
     className={className || ""}
     alt=''
     effect='blur'
     src={src}
     />
  );
}

export default Img