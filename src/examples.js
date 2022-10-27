import JsxValue from './ex-1026/JsxValue'
import Conter from './ex-1025/Conter'
import StudentList from './ex-1026/StudentList'
import Menu from './1.選單項目/Menu'
import Demo from './2.物件陣列處理練習/Demo'
import Parent from './ex-1027/Parent'

//export default的時候 可以在導入(import)時直接改名稱
import ParentPropTypes from './ex-1027-02/Parent'
import ParentDataFlow from './ex-1027-03/Parent'

export const examples = [
  {
    name: 'props三種資料流',
    path: './ex-1027-03/Parent',
    component: ParentDataFlow,
  },
  {
    name: 'props屬性定義類別',
    path: './ex-1027-02/Parent',
    component: ParentPropTypes,
  },
  {
    name: 'props屬性',
    path: './ex-1027/Parent',
    component: Parent,
  },
  {
    name: '物件陣列資料處理',
    path: './2.物件陣列處理練習/Demo',
    component: Demo,
  },
  {
    name: '計數器',
    path: './ex-1025/Conter',
    component: Conter,
  },
  {
    name: 'JSX中的值與表達式',
    path: './ex-1026/JsxValue',
    component: JsxValue,
  },
  {
    name: '學生列表清單(map-key)',
    path: './ex-1026/StudentList',
    component: StudentList,
  },
  {
    name: '選單active(map-key)',
    path: './1.選單項目/Menu',
    component: Menu,
  },
]
