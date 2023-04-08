export interface IEvent {
    name: string
    from: string
    to:string
    color: Color
    id:number
}

export type Color = "red" | "blue" | "green" | "yellow" | "orange" | "purple" | "pink" | "brown" | "grey"
export interface State {
    events: IEvent[]
}