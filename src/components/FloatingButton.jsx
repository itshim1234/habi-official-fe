import React from 'react'

const FloatingButton = () => {
  return (
    <div>
        <span
            className="text-[14px] md:text-[20px] 2xl:text-[24px] font-giloryS pb-0.5 leading-4"
            onClick={() => navigate("/Construction-Cost-Calculator")}
          >
            <h1>Construction Cost Calculator</h1>
          </span> 
           <span className="text-lg mb-1 text-[#c0c0c0] hidden md:block">|</span>
      
    </div>
  )
}

export default FloatingButton
