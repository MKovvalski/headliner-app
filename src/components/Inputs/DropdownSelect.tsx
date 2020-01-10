import React from 'react'
import Select from 'react-select'
import { DropdownSelect } from './types'

const DropdownSelect: React.FC<DropdownSelect> = ({
  options,
  defaultValue,
  onChange,
  isMulti,
  isClearable,
  isDisabled = false,
  value
}) => {
  return (
    <>
      <Select
        value={value}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={isDisabled}
      />
    </>
  )
}

export default DropdownSelect
