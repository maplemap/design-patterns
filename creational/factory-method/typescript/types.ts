export interface Payment {
    pay(amount:number): Promise<void>
}
