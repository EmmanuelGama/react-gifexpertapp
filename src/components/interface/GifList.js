import { useState } from 'react'
import GifGrid from '../common/GifGrid'
import AddCategory from './AddCategory'

const GifList = () => {
  const [categoryList, setcategoryList] = useState([])

  return (
    <>
      <AddCategory setCategory={setcategoryList} />

      <hr className="border-t-4 border-gray-800 my-3 rounded" />

      {
        categoryList.map((category, i) => (
          <GifGrid key={ `grid-${i}` } category={ category } />
        ))
      }
    </>
  )
}

export default GifList