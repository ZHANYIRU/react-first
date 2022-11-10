import { useState } from 'react'

function Conter() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      {!!total && <p>目前total的值為：{total}</p>}
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default Conter
