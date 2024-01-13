import React from 'react'

export const CardWrapper = ({InnerComponent}) => {
  return (
    <div style={{border:"2px solid black", padding: 20}}>
        {<InnerComponent/>}
    </div>
  )
}
