export class Product{
    constructor(
        public id: string,
        public name: string,
        public slug: string,
        public description: string,
        public price: number,
        public discount_start: Date,
        public discount_end: Date
    ){}
}