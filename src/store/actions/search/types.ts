// entries
export interface ENTRY_Source {
  id: string,
  name: string
}

export interface ENTRY_Sources {
  sources: ENTRY_Source[] | null
}

// outputs
export interface OUTPUT_DefaultAction {
  type: string
  payload: any
}

export interface OUTPUT_Sources extends OUTPUT_DefaultAction {
  payload: ENTRY_Sources
}
