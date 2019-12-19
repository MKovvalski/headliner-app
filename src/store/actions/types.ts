export interface PayloadInterface {
  totalResults: number
  headliners: object[] | null
}

export interface ActionResult {
  type: string,
  payload: PayloadInterface
}