import React from 'react'
import Select from 'react-select'
import { DropdownSelect } from './types'

const DropdownSelect: React.FC<DropdownSelect> = ({
  options,
  defaultValue,
  onChange,
  value
}) => {
  return (
    <>
      <Select
        value={value}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  )
}

export default DropdownSelect
