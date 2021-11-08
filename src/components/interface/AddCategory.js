import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategory }) => {
  const [inputValue, SetInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setCategory(categories => [ inputValue, ...categories ])
      SetInputValue('')
    }
  }

  const handleInputChange = e => {
    SetInputValue(e.target.value)
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border-2 border-blue-600 py-1 px-2 rounded shadow text-gray-700 semibold focus:outline-none w-full mb-2 shadow" 
      />
      <button 
        type="submit"
        className="semibold text-lg text-white bg-blue-600 rounded py-1 px-2 hover:bg-blue-700 w-full mb-2 shadow"
      > 
        Agregar 
      </button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory