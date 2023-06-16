export type ACTIONS = "SUBMIT" | "CLOSE"

export interface ModalAction{
    action : ACTIONS,
    payload : any
}