export class CreateProductDto{
    readonly name: string
    readonly slug: string
    readonly description: string
    public image: string
    readonly quantity: number
    readonly price: number
    readonly discount_start: Date
    readonly discount_end: Date
}