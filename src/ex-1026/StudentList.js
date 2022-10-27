import { data } from './data/student'

function StudentList() {
  return (
    <>
      <h1>學生資料表</h1>
      <ul>
        {data.map((e, i) => {
          return <li key={e.id}>{e.name}</li>
        })}
      </ul>
    </>
  )
}
export default StudentList
