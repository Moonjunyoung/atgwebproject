import React, { useState } from 'react'
import Select from 'react-select'
import '../css/ComponentNameListView.css'

function MakeOption (x) {
  return { value: x, label: x }
}

const ComponentNameListView = ({ ComponentNamedata }) => {
  const handleSelect = newvalue => {
    console.log(newvalue.value)
  }

  return (
    <div>
      <Select
        onChange={handleSelect}
        options={ComponentNamedata.map(x => MakeOption(x))}
        id='root-Selectbox'
      />
    </div>
  )
}

export default ComponentNameListView
