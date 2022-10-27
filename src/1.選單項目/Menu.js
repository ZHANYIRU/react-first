import './Menu.css'
import { useState } from 'react'

function Menu() {
  const [clickMe, setClickMe] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']
  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setClickMe(v)
              }}
            >
              <a href="#/" className={clickMe === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
