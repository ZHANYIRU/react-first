import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
function Parent() {
  // const [parentData, setParentData] = useState('parent data')

  //為了接收回來ChildB回傳的資料使用
  const [dataFromChildB, setDataFromChildB] = useState('123')
  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料：{dataFromChildB}</p>
      <hr />
      <ChildA dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}
export default Parent
