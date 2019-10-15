import React, { useState } from 'react'
import Select from 'react-select'
import '../css/ComponentNameListView.css'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  })
}

const ComponentNameListView = () => {
  const handleSelect = newvalue => {
    console.log(newvalue)
  }

  return (
    <div>
      <Select
        onChange={handleSelect}
        isMulti
        name='colors'
        styles={customStyles}
        className='basic-multi-select'
        classNamePrefix='select'
      />
    </div>
  )
}

export default ComponentNameListView
