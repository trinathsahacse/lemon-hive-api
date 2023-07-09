export class CreateCartDto{
    readonly product_id: string
    public product: {
        name: string
        slug: string
        description: string
        image: string
        quantity: number
        price: number
        discount_start: Date
        discount_end: Date
    }
    readonly quantity: number
    readonly price: number
    readonly subtotal: number
}