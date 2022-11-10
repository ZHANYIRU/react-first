import { useState } from 'react'

function ChildB({ setDataFromChildB }) {
  const [childBData, setChildBData] = useState('child B data')
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          setDataFromChildB(childBData)
        }}
      >
        送資料到Parent
      </button>
    </>
  )
}

export default ChildB
