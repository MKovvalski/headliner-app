export interface SelectOption {
  value: string,
  label: string
}

export interface DropdownSelect {
  options: SelectOption[],
  defaultValue?: SelectOption,
  onChange?: any,
  value?: SelectOption | SelectOption[],
  isMulti?: boolean,
  isClearable?: boolean,
  isDisabled?: boolean
}