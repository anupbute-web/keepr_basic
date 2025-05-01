import React from 'react'
import info from './info'

function createDiv(name){
    return(
        <div>
            <Hello name={name.name} number={name.number} />
        </div>
    )
}
function Hello() {
  return (
    <div>
      {
        info.map(()=>{})
      }
    </div>
  )
}

export default Hello
