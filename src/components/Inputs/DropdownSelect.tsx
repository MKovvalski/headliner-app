import React from 'react'
import Select from 'react-select'
import { DropdownSelectProps } from './types'

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  defaultValue,
  onChange,
  isMulti,
  isClearable,
  isDisabled = false,
  className,
  placeholder,
  value,
  classNamePrefix,
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
        placeholder={placeholder}
        className={className}
        classNamePrefix={classNamePrefix}
      />
    </>
  )
}

export default DropdownSelect
