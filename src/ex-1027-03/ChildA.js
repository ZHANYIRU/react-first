function ChildA({ dataFromChildB }) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自ChildB的資料：{dataFromChildB}</p>
    </>
  )
}

export default ChildA
