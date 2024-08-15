
import React, { useState } from 'react'
import './style.scss'
function SwitchTabs({data,onTabChange}) {
    const [selectdTab,setSelectedTab] = useState(0);
    const [left,setLeft] = useState(0);
    const activeTab = (tab,index)=>{
        setLeft(index*100)
        setTimeout(() => {
          setSelectedTab(index)
        }, 300);
        onTabChange(tab,index)
    }
 
  return (
    <div className='switchingTabs'>
        <div className='tabItems'>
          {data.map((tab,index)=>{
             return <span 
              onClick={()=> activeTab(tab,index)}
             className={`tabItem ${selectdTab===index?"active":""}`}>{tab}</span>
           })} 
          <span className='movingBg'style={{left:left}}></span>
        </div>
    </div>
  )
}

export default SwitchTabs

// ${selectdTab === index ?"active":""}